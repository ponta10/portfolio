import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { email, content } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.ADMIN_EMAIL,
    subject: `${email}からのお問い合わせ`,
    text: content,
  };

  const adminOptions = {
    from: process.env.ADMIN_EMAIL,
    to: email,
    subject: "お問い合わせありがとうございます",
    text: `お問い合わせいただき、ありがとうございます。\n
下記の内容でお問い合わせを受け付けました。\n
---\n
${content}\n
---\n
確認次第、ご連絡させていただきます。\n
お問い合わせ内容によっては、回答までに時間がかかる場合がございますので、予めご了承ください。\n
何かご不明点や追加の情報が必要な場合は、このメールに直接ご返信ください。\n
よろしくお願いいたします。`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(adminOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email", error);
    res.status(500).send("Error sending email");
  }
};
