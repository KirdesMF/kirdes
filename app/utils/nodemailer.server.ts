import { createTransport } from 'nodemailer';

export type Mail = {
  from: string;
  subject: string;
  message: string;
  email: string;
};

export async function sendContactMail(content: Mail) {
  const transporter = createTransport({
    service: 'Gmail',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: content.from,
    to: process.env.GMAIL_RECEIVER,
    subject: content.subject,
    text: content.message,
    html: `<div>${content.message}</div>`,
  });
}
