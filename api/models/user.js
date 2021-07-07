const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    email: {
        type: String,
        unique: true,
    },
    password: String
});

module.exports = mongoose.model('User', userSchema);