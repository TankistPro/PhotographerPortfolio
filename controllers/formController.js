const { validationResult } = require("express-validator");
const { sendMailForm, sendMailOrder } = require("./sendMailController");

module.exports.sendFormData = async (req, res) => {
  if (validationResult(req).isEmpty()) {
    await sendMailForm(req);
    res.status(400).json({ message: "Ваше сообщение успешно отправленно!", type: "success" })
  } else {
    res.status(400).json({ message: "Проверьте введенные данные!", type: "error" })
  }
}

module.exports.sendOrder = async (req, res) => {
  if (validationResult(req).isEmpty()) {
    await sendMailOrder(req);
    res.status(200).json({ message: "Заказ успешно отправлен!", type: "success" })
  } else {
    res.status(400).json({ message: "Данные не корректны!", type: "error" })
  }
}
