const validator = require('../helpers/validator');

const purchasesValidator = (req, res, next) => {
    const validationRules = {
        "productsNames": "required|string|min:2|max:50",
        "amount": "required|string|min:1|max:100",
        "cost": "required|numeric|min:1|max:10000"
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
    purchasesValidator
}