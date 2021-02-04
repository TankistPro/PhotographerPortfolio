const nodemailer = require("nodemailer");

module.exports.mailConfig = {
  from: {
    email: 'photographer_service@mail.ru',
    password: '_ArpiedYVU23'
  },
  to: {
    email: 'nakol.nayk@mail.ru'
  },
  mailTransporter: function () {
    return nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: this.from.email,
        pass: this.from.password,
      },
    })
  },
  mailMessageForm: function (req) {
    return `
      <h2 style="margin: 0">Клиент задал вопрос!</h2><br>
      <b>Сообщение</b>:<br>
      ${req.body.message}<hr style="height: 3px; border: none; background-color: #000000;">
      <h3 style="margin: 0">Контактные данные клиента:</h3><br>
      <i>Имя клиента:</i> ${req.body.userName}<br>
      <i>Email:</i> ${req.body.email}<br>
    `
  },
  mailMessageOrder: function (req) {
    return `
      <h2 style="margin: 0">Поступил заказ!</h2><br>
      <h3 style="margin: 0">Контактные данные клиента:</h3><br>
      <i>Имя клиента:</i> ${req.body.userName}<br>
      <i>Телефон:</i> ${req.body.phone}<br>
    `
  }
}
