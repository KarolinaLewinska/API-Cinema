const validator = require('../helpers/validate');

const moviesValidator = (req, res, next) => {
    const validationRules = {
        "title": "required|string|min:2|max:100", 
        "genre": "required|string|min:2|max:100",
        "duration": "required|string|min:2|max:20",
        "screeingRoom": "required|alpha_num|min:1|max:10000",
        "minimalAge": "required|string|min:2|max:3"
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
    moviesValidator
}