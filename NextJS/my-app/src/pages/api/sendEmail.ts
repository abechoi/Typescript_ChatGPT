// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const content = {
      to: 'abraham.choi@icloud.com',
      from: email,
      subject: `New Message from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    try {
      await sgMail.send(content);
      res.status(200).send('Message sent successfully.');
    } catch (error) {
      console.error('Error sending email', error);
      res.status(400).send('Message not sent.');
    }
  } else {
    res.status(404).send('Invalid request.');
  }
};

export default handler;
