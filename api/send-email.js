import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Debug logs for env variable troubleshooting
  console.log('EMAIL_USER present:', !!process.env.EMAIL_USER);
  console.log('EMAIL_APP_PASSWORD present:', !!process.env.EMAIL_APP_PASSWORD);

  // Set CORS headers for both www and non-www
  const allowedOrigins = [
    'https://ecolawnsdenver.com',
    'https://www.ecolawnsdenver.com'
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, zipcode, phone, lawnSize, subscriptionOption, type } = req.body;

  if (!email || !zipcode) {
    return res.status(400).json({ success: false, message: 'Email and zipcode are required' });
  }

  try {
    // Create Nodemailer transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
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
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('SEND EMAIL ERROR:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
} 