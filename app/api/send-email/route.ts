import { NextRequest, NextResponse } from 'next/server';
import { upsertLeadFromWebsiteBooking } from '@/lib/crm-store';
import { getMailTransporter } from '@/lib/crm-mail';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const previewOnly = body.previewOnly === true;
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

    const bookingLabel = sanitizedType || 'Lawn Service Booking';
    const htmlBody = `
        <h2>New ${bookingLabel} Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName || 'Not provided'}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Phone:</strong> ${sanitizedPhone || 'Not provided'}</p>
        <p><strong>Property Address:</strong> ${sanitizedAddress || 'Not provided'}</p>
        ${sanitizedLawnSize ? `<p><strong>Lawn Size:</strong> ${sanitizedLawnSize} sq ft</p>` : ''}
        ${subscriptionOption ? `<p><strong>Package:</strong> ${subscriptionOption === 'seasonPass' ? 'Season Pass' : subscriptionOption === 'biweekly' ? 'Bi-Weekly' : subscriptionOption}</p>` : ''}
        ${frequency ? `<p><strong>Frequency:</strong> ${frequency === 'weekly' ? 'Weekly' : 'Bi-Weekly'}</p>` : ''}
        ${sanitizedDrivewayLength ? `<p><strong>Driveway Length:</strong> ${sanitizedDrivewayLength} feet</p>` : ''}
        ${sanitizedNotes ? `<p><strong>Notes:</strong> ${sanitizedNotes}</p>` : ''}
      `;

    const textBody = [
      `New ${bookingLabel} Submission`,
      '',
      `Name: ${sanitizedName || 'Not provided'}`,
      `Email: ${sanitizedEmail}`,
      `Phone: ${sanitizedPhone || 'Not provided'}`,
      `Property Address: ${sanitizedAddress || 'Not provided'}`,
      ...(sanitizedLawnSize ? [`Lawn Size: ${sanitizedLawnSize} sq ft`] : []),
      ...(subscriptionOption
        ? [
            `Package: ${subscriptionOption === 'seasonPass' ? 'Season Pass' : subscriptionOption === 'biweekly' ? 'Bi-Weekly' : subscriptionOption}`,
          ]
        : []),
      ...(frequency
        ? [`Frequency: ${frequency === 'weekly' ? 'Weekly' : 'Bi-Weekly'}`]
        : []),
      ...(sanitizedDrivewayLength ? [`Driveway Length: ${sanitizedDrivewayLength} feet`] : []),
      ...(sanitizedNotes ? [`Notes: ${sanitizedNotes}`] : []),
    ].join('\n');

    const notifyUser = process.env.EMAIL_USER?.trim() ?? '';
    const mailOptions = {
      from: notifyUser,
      to: notifyUser,
      subject: `New ${bookingLabel} from ${sanitizedName || 'No Name'}`,
      text: textBody,
      html: htmlBody,
    };

    if (previewOnly) {
      if (!notifyUser) {
        return NextResponse.json(
          { success: false, message: 'Email service not configured properly' },
          { status: 500 }
        );
      }
      return NextResponse.json({
        success: true,
        preview: {
          to: notifyUser,
          subject: mailOptions.subject,
          html: htmlBody,
          text: textBody,
        },
      });
    }

    const transporter = getMailTransporter();
    if (!transporter || !notifyUser) {
      return NextResponse.json(
        { success: false, message: 'Email service not configured properly' },
        { status: 500 }
      );
    }

    await transporter.sendMail(mailOptions);

    const notifyTo = notifyUser;
    if (notifyTo) {
      try {
        await upsertLeadFromWebsiteBooking({
          name: sanitizedName,
          email: sanitizedEmail,
          phone: sanitizedPhone,
          physicalAddress: sanitizedAddress,
          subject: mailOptions.subject,
          bodyText: textBody,
          bodyHtml: htmlBody,
          toAddress: notifyTo,
        });
      } catch (crmErr) {
        console.error('CRM upsert from booking form failed:', crmErr);
      }
    }

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

