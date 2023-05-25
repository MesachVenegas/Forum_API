const { validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next();
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = validateFields;
