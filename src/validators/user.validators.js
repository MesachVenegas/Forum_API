const { check, validationResult } = require('express-validator');
const validateFields = require('../utils/validate');

// validation to create a new user account.
const createUserValidator = [
    check('username', 'Error on username')
        .exists().withMessage("The username field don't exist")
        .trim().notEmpty().withMessage("The username field cannot be empty")
        .isString().withMessage("The username field must be a string")
        .isLength({ min: "6", max: "150" }).withMessage("The username must be 6 characters long minimum and maximum 150 characters"),
    check('email', 'Error on email')
        .exists().withMessage("The email field don't exist")
        .trim().notEmpty().withMessage("The email field cannot be empty")
        .isString().withMessage("The email field must be a string")
        .isEmail().withMessage("Email invalid"),
    check('password', 'Error on password')
        .exists().withMessage("The password field don't exist")
        .trim().notEmpty().withMessage("The  password cannot be empty")
        .isString().withMessage("The password must be a string")
        .isLength({ min: "6" }).withMessage("The password mut be a 6 character minimun")
        .isAlphanumeric().withMessage("The password don't must contain symbols or special characters"),
    (req, res, next) => {
        validateFields(req, res, next);
    }
];

// validation to login a user.
const userLoginValidator = [
    check('email', 'Error on email')
        .exists().withMessage("The email field don't exist")
        .notEmpty().withMessage("The email cannot be empty")
        .isString().withMessage("The email must be a string")
        .isEmail().withMessage("Email Invalid"),
    check('password', 'Error en password')
        .exists().withMessage("The password field don't exist")
        .notEmpty().withMessage("The password field cannot be empty")
        .isString().withMessage("The password must be a string")
        .isLength({ min: "6"}).withMessage("The password will be 6 characters minimun")
        .isAlphanumeric().withMessage("The password dot't must contain symbols or special characters"),
    (req, res, next) => {
        validateFields(req, res, next);
    }
]

module.exports = {
    createUserValidator,
    userLoginValidator
};
