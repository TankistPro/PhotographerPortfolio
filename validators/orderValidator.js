const  { check } = require('express-validator');

module.exports.orderValidator = [
    check('userName').isLength({min: 2}).not().isNumeric(),
    check('phone').matches(/^\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/)
];
