const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"))
})

router.get("/slider", ((req, res) => {
  res.sendFile(path.join(__dirname + "/../views/slider.html"))
}))

module.exports = router;
