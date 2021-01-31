const express = require("express");
const router = express.Router();
const { getSlider } = require("../controllers/sliderController");
const { sendFormData } = require("../controllers/formController")


router.get("/", (req, res) => {
  res.render('index', {
    title: "Главная страница"
  })
})

router.get("/slider/:filter", getSlider);

router.post("/", sendFormData);

module.exports = router;
