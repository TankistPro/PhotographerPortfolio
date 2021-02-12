const  { check } = require('express-validator');

module.exports.orderValidator = [
    check('userName').isLength({min: 2}).not().isNumeric(),
    check('phone').isLength({min:14, max:14})
]
