import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import nodemailer from 'nodemailer';

// Get directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

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
    ? 'https://ecolawnsdenver.com' 
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
    const { name, email, zipcode, phone, lawnSize, subscriptionOption, type } = req.body;
    if (!email || !zipcode) {
      console.log('Missing required fields:', { email: !!email, zipcode: !!zipcode });
      return res.status(400).json({ success: false, message: 'Email and zipcode are required' });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return res.status(400).json({ success: false, message: 'Invalid email format' });
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
      subject: `New ${type || 'Lawn Service Booking'} from ${name || 'No Name'}`,
      html: `
        <h2>New ${type || 'Lawn Service Booking'} Submission</h2>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Zipcode:</strong> ${zipcode}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Lawn Size:</strong> ${lawnSize ? lawnSize + ' sq ft' : 'Not provided'}</p>
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
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
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
}); 