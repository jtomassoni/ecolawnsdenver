import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { existsSync } from 'fs';
import nodemailer from 'nodemailer';

// Get directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables - look in project root (one level up from server/)
// Try loading from explicit path first, then fall back to default
const envPath = resolve(__dirname, '..', '.env');
if (existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.log('Loading .env from:', envPath);
} else {
  // Fall back to default .env location or use environment variables (production)
  dotenv.config();
  console.log('Using default .env location or environment variables');
}

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('Nodemailer configuration error:', error);
  } else {
    console.log('Nodemailer is ready to send emails');
  }
});

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://ecolawnsdenver.com',
        'https://www.ecolawnsdenver.com'
      ]
    : true, // Allow all origins in development
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);
  next();
});

// Add OPTIONS handler for preflight requests
app.options('*', cors());

app.use(express.json());

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  console.error('Error stack:', err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  console.log('Health check requested');
  res.json({ status: 'ok', message: 'Server is running' });
});

// Email submission endpoint
app.post('/api/send-email', async (req, res) => {
  console.log('Received email request:', req.body);
  try {
    const { name, email, phone, address, lawnSize, subscriptionOption, type } = req.body;
    
    // Validate required fields
    if (!email) {
      console.log('Missing required fields:', { email: !!email });
      return res.status(400).json({ success: false, message: 'Email is required' });
    }
    
    // Sanitize and validate inputs
    const sanitizeString = (str, maxLength = 500) => {
      if (!str) return '';
      return String(str).trim().slice(0, maxLength).replace(/[<>]/g, '');
    };
    
    const sanitizedName = sanitizeString(name, 100);
    const sanitizedEmail = sanitizeString(email, 100).toLowerCase();
    const sanitizedPhone = sanitizeString(phone, 20).replace(/\D/g, '');
    const sanitizedAddress = sanitizeString(address, 200);
    const sanitizedLawnSize = sanitizeString(lawnSize, 10).replace(/\D/g, '');
    const sanitizedType = sanitizeString(type, 50);
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      console.log('Invalid email format:', sanitizedEmail);
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }
    
    // Validate phone (at least 10 digits)
    if (sanitizedPhone.length < 10) {
      return res.status(400).json({ success: false, message: 'Invalid phone number format' });
    }

    // Check if email configuration is set up
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('Email configuration missing:', {
        hasEmailUser: !!process.env.EMAIL_USER,
        hasAppPassword: !!process.env.EMAIL_APP_PASSWORD
      });
      return res.status(500).json({ 
        success: false, 
        message: 'Email service not configured properly'
      });
    }

    console.log('Attempting to send email with config:', {
      user: process.env.EMAIL_USER,
      hasPassword: !!process.env.EMAIL_APP_PASSWORD
    });
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to yourself
      subject: `New ${sanitizedType || 'Lawn Service Booking'} from ${sanitizedName || 'No Name'}`,
      html: `
        <h2>New ${sanitizedType || 'Lawn Service Booking'} Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName || 'Not provided'}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Phone:</strong> ${sanitizedPhone || 'Not provided'}</p>
        <p><strong>Property Address:</strong> ${sanitizedAddress || 'Not provided'}</p>
        <p><strong>Lawn Size:</strong> ${sanitizedLawnSize ? sanitizedLawnSize + ' sq ft' : 'Not provided'}</p>
        <p><strong>Package:</strong> ${subscriptionOption || 'Not provided'}</p>
      `
    };

    console.log('Sending email with options:', mailOptions);
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Detailed error sending email:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      command: error.command
    });
    
    // Provide more helpful error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    if (error.code === 'EAUTH' || error.message.includes('Invalid login')) {
      errorMessage = 'Email service authentication failed. Please check email configuration.';
    } else if (error.code === 'ECONNECTION' || error.message.includes('connect')) {
      errorMessage = 'Could not connect to email service. Please check your internet connection.';
    } else if (process.env.NODE_ENV === 'development') {
      errorMessage = `Email error: ${error.message}`;
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage
    });
  }
});

// Quote submission endpoint
app.post('/api/quotes', (req, res) => {
  const quoteData = req.body;
  console.log('Received quote request:', quoteData);
  // Here you would typically save to a database
  res.json({ 
    success: true, 
    message: 'Quote request received',
    estimatedPrice: '$40/visit'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
  console.log('Environment check:', {
    hasEmailUser: !!process.env.EMAIL_USER,
    hasEmailPassword: !!process.env.EMAIL_APP_PASSWORD,
    nodeEnv: process.env.NODE_ENV || 'development'
  });
}); 