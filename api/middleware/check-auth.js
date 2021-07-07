const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.headers.authorization.split(' ')[1], 
        process.env.JWTpassword); 
        next();            
    } catch(err) {         
        res.status(401).json({ wiadomość: 'Authorization failed' }); 
    }
}
