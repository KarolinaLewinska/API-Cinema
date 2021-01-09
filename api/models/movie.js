const mongoose = require('mongoose');

const movieSchema = mongoose.Schema ({
    _id: mongoose.Types.ObjectId,
    title: String, 
    genre: String,
    duration: String,
    screeingRoom: Number,
    minimalAge: String,
});

module.exports = mongoose.model('Movie', movieSchema);
