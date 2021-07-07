const validator = require('../helpers/validator');

const authValidator = (req, res, next) => {
    const validationRules = {
        "email": "required|email|min:3|max:255",
        "password": "required|string|min:8|max:128"
    }
    validator(req.body, validationRules, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Invalid data format',
                    data: err
                });
        } else {    
            next();
        }
    });
}

module.exports = {
    authValidator
}