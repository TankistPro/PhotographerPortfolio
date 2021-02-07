const express = require("express");
const router = express.Router();
const { getSlider } = require("../controllers/sliderController");
const { sendFormData, sendOrder } = require("../controllers/formController");
const { formValidate } = require("../validators/formValidator");
const { orderValidator } = require("../validators/orderValidator");


router.get("/", (req, res) => {
  res.render('index', {
    title: "Главная страница",
  })
})
router.get("/slider/:filter", getSlider);

router.post("/", formValidate ,sendFormData);
router.post('/order', orderValidator, sendOrder);

module.exports = router;
