const express = require("express");
const router = express.Router();
const { getSlider } = require("../controllers/sliderController");
const { sendFormData, sendOrder } = require("../controllers/formController")
const { formValidate } = require("../validators/formValidator");


router.get("/", (req, res) => {
  res.render('index', {
    title: "Главная страница"
  })
})

router.post("/", formValidate ,sendFormData);
router.post('/order', sendOrder)
router.get("/slider/:filter", getSlider);

module.exports = router;
