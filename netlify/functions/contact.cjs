// netlify/functions/contact.cjs
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message, lang } = JSON.parse(event.body);

  // 1) Notificação para você
  const adminMail = {
    from: process.env.FROM_EMAIL,
    to: process.env.CONTACT_TO,
    subject: `📝 Novo contato de ${name}`,
    html: `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `,
  };

  // 2) Resposta automática
  const messages = {
    pt: {
      subject: "Obrigado pelo seu contato!",
      greeting: `Olá ${name},`,
      body: "Recebemos sua mensagem e entraremos em contato em breve.",
      yourMessage: "Sua mensagem enviada:",
      signature: "— Felipe Amaral",
    },
    en: {
      subject: "Thanks for reaching out!",
      greeting: `Hi ${name},`,
      body: "Thanks for your message! We'll get back to you shortly.",
      yourMessage: "Your submitted message:",
      signature: "— Felipe Amaral",
    },
  };
  const txt = messages[lang === "pt" ? "pt" : "en"];

  const replyMail = {
    from: process.env.FROM_EMAIL,
    to: email,
    subject: txt.subject,
    html: `
      <p>${txt.greeting}</p>
      <p>${txt.body}</p>
      <hr/>
      <p><em>${txt.yourMessage}</em></p>
      <blockquote>${message.replace(/\n/g, "<br/>")}</blockquote>
      <p>${txt.signature}</p>
    `,
  };

  try {
    await transporter.sendMail(adminMail);
    await transporter.sendMail(replyMail);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Mail error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Falha ao enviar e-mail" }),
    };
  }
};
