import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth:{
      type: "OAuth2",
      user: process.env.GOOGLE_USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    },
});

export async function sendEmail({ to, subject, text }) {
  const info = await transporter.sendMail({
    from: process.env.GOOGLE_USER,
    to,
    subject,
    text,
  });

  return `Email sent. Message ID: ${info.messageId}`;
}
