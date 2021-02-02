const { validationResult } = require("express-validator");
const { sendMail } = require("./sendMailController");

module.exports.sendFormData = async (req, res) => {
  if (validationResult(req).isEmpty()) {
    await sendMail(req);
    res.status(200).json({ message: "Форма успешно отправлена!", type: "success" })
  } else {
    res.status(400).json({ message: "Данные не корректны!", type: "error" })
  }
}
