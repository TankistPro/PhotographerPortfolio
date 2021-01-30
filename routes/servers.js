const express = require("express");
const router = express.Router();
const { getSlider } = require("../controllers/sliderController");


router.get("/", (req, res) => {
  res.render('index', {
    title: "Главная страница"
  })
})

router.get("/slider/:filter", getSlider);

module.exports = router;
