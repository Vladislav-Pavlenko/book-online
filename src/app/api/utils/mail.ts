import nodemailer from 'nodemailer';
export async function sendResetCode(email: string, code: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: '"Readery App Support" <noreply@testapp.com',
    to: email,
    subject: 'Your password recovery code',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Password recovery</h2>
        <p>You have requested a password recovery. Your confirmation code:</p>
        <h1 style="letter-spacing: 5px; color: #333;">${code}</h1>
        <p>This code is valid for 15 minutes.</p>
        <p>If you did not request this, please ignore this email.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    console.error('Error on send emaill', err);
    return false;
  }
}
