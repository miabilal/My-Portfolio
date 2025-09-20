import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
    subject: `Portfolio Contact: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p style="color: #6b7280; font-size: 14px;">
          This message was sent from your portfolio contact form.
        </p>
      </div>
    `,
  };

  const autoReplyOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: 'Thank you for contacting Muhammad Bilal',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">Thank you for reaching out!</h2>
        <p>Hi ${data.name},</p>
        <p>Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible.</p>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Your message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <p>Best regards,<br>Muhammad Bilal<br>Software Engineer</p>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 12px;">
          This is an automated response. Please do not reply to this email.
        </p>
      </div>
    `,
  };

  try {
    // Send email to admin
    await transporter.sendMail(mailOptions);
    
    // Send auto-reply to user
    await transporter.sendMail(autoReplyOptions);
    
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email' };
  }
};

export const sendNewsletterWelcome = async (email: string, name?: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Muhammad Bilal\'s Newsletter!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">Welcome to my newsletter!</h2>
        <p>Hi ${name || 'there'},</p>
        <p>Thank you for subscribing to my newsletter! You'll receive updates about:</p>
        <ul>
          <li>New projects and technologies I'm working on</li>
          <li>Tech insights and tutorials</li>
          <li>Career updates and achievements</li>
          <li>Industry trends and best practices</li>
        </ul>
        <p>I'll keep you updated with valuable content and insights from my journey as a Software Engineer.</p>
        <p>Best regards,<br>Muhammad Bilal<br>Software Engineer</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Welcome email sent' };
  } catch (error) {
    console.error('Newsletter welcome email failed:', error);
    return { success: false, message: 'Failed to send welcome email' };
  }
};
