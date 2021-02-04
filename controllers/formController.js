const { validationResult } = require("express-validator");
const { sendMailForm, sendMailOrder } = require("./sendMailController");

module.exports.sendFormData = async (req, res) => {
  if (validationResult(req).isEmpty()) {
    await sendMailForm(req);
    res.status(200).json({ message: "Форма успешно отправлена!", type: "success" })
  } else {
    res.status(400).json({ message: "Данные не корректны!", type: "error" })
  }
}

module.exports.sendOrder = async (req, res) => {
  await sendMailOrder(req);
  res.status(200).json({ message: "Заказ успешно отправлен!", type: "success" })
}
