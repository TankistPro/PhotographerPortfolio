const { mailConfig } = require("../config/mailConfig");

module.exports.sendMailForm = async (req) => {
  let transporter = mailConfig.mailTransporter();
  let message = mailConfig.mailMessageForm(req);

  await transporter.sendMail({
    from: '"PortfolioWEB-SITE" <' + mailConfig.from.email+ '>',
    to: mailConfig.to.email,
    subject: req.body.subject,
    text: "From Portfolio",
    html: message,
  })
}

module.exports.sendMailOrder = async (req) => {
  let transporter = mailConfig.mailTransporter();
  let message = mailConfig.mailMessageOrder(req);

  await transporter.sendMail({
    from: '"PortfolioWEB-SITE" <' + mailConfig.from.email+ '>',
    to: mailConfig.to.email,
    subject: 'Заказ на съемку',
    text: "From Portfolio",
    html: message,
  })
}
