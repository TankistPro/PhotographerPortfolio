const { sendMail } = require("./sendMailController");

module.exports.sendFormData = async (req, res) => {
  sendMail(req);
  res.redirect("/");
}
