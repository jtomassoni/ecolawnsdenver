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

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Email submission endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, zipcode, phone, lawnSize, subscriptionOption, type } = req.body;
    if (!email || !zipcode) {
      return res.status(400).json({ success: false, message: 'Email and zipcode are required' });
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
      code: error.code
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

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
}); 