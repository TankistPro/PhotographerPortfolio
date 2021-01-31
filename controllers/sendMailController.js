const nodemailer = require("nodemailer");
const { mailConfig } = require("../config/mailConfig");

module.exports.sendMail = async (req) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: mailConfig.from.email,
      pass: mailConfig.from.password,
    },
  })

  let message = mailConfig.mailMessage(req);
  console.log(message);

  await transporter.sendMail({
    from: '"PortfolioWEB-SITE" <' + mailConfig.from.email+ '>',
    to: mailConfig.to.email,
    subject: req.body.subject,
    text: "From Portfolio",
    html: message,
  })
}
