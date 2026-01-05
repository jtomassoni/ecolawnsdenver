import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, lawnSize, subscriptionOption, frequency, type, drivewayLength, notes } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // Sanitize and validate inputs
    const sanitizeString = (str: string | undefined, maxLength = 500): string => {
      if (!str) return '';
      return String(str).trim().slice(0, maxLength).replace(/[<>]/g, '');
    };

    const sanitizedName = sanitizeString(name, 100);
    const sanitizedEmail = sanitizeString(email, 100).toLowerCase();
    const sanitizedPhone = sanitizeString(phone, 20).replace(/\D/g, '');
    const sanitizedAddress = sanitizeString(address, 200);
    const sanitizedLawnSize = sanitizeString(lawnSize, 10).replace(/\D/g, '');
    const sanitizedType = sanitizeString(type, 50);
    const sanitizedDrivewayLength = sanitizeString(drivewayLength, 10);
    const sanitizedNotes = sanitizeString(notes, 500);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone (at least 10 digits)
    if (sanitizedPhone.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Check if email configuration is set up
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { success: false, message: 'Email service not configured properly' },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New ${sanitizedType || 'Lawn Service Booking'} from ${sanitizedName || 'No Name'}`,
      html: `
        <h2>New ${sanitizedType || 'Lawn Service Booking'} Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName || 'Not provided'}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Phone:</strong> ${sanitizedPhone || 'Not provided'}</p>
        <p><strong>Property Address:</strong> ${sanitizedAddress || 'Not provided'}</p>
        ${sanitizedLawnSize ? `<p><strong>Lawn Size:</strong> ${sanitizedLawnSize} sq ft</p>` : ''}
        ${subscriptionOption ? `<p><strong>Package:</strong> ${subscriptionOption === 'seasonPass' ? 'Season Pass' : subscriptionOption === 'biweekly' ? 'Bi-Weekly' : subscriptionOption}</p>` : ''}
        ${frequency ? `<p><strong>Frequency:</strong> ${frequency === 'weekly' ? 'Weekly' : 'Bi-Weekly'}</p>` : ''}
        ${sanitizedDrivewayLength ? `<p><strong>Driveway Length:</strong> ${sanitizedDrivewayLength} feet</p>` : ''}
        ${sanitizedNotes ? `<p><strong>Notes:</strong> ${sanitizedNotes}</p>` : ''}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    
    let errorMessage = 'Failed to send email. Please try again later.';
    if (error.code === 'EAUTH' || error.message?.includes('Invalid login')) {
      errorMessage = 'Email service authentication failed. Please check email configuration.';
    } else if (error.code === 'ECONNECTION' || error.message?.includes('connect')) {
      errorMessage = 'Could not connect to email service. Please check your internet connection.';
    }

    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}

