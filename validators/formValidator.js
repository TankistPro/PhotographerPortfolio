const  { check } = require('express-validator');

module.exports.formValidate =  [
  check("userName").trim().isLength({min: 2}),
  check("email").normalizeEmail().isEmail(),
  check("subject").trim().not().isEmpty(),
  check("message").trim().not().isEmpty(),
]
