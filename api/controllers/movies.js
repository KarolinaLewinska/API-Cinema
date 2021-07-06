const mongoose = require('mongoose');
const Movie = require('../models/movie');

exports.allMovies = (req, res, next) => {    
    Movie.find()
    .then((docs) => {
        res.status(200).json({
            message: 'Dostępny Repertuar: ',
            info: docs,
        });
    })
    .catch((err) => res.status(500).json({message: err}));
};

exports.newMovie = (req, res, next) => {
    const movie = new Movie({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,   
        genre: req.body.genre,
        duration: req.body.duration,
        screeingRoom: req.body.screeingRoom,
        minimalAge: req.body.minimalAge,
    });
    movie.save()
    .then((doc) => {
        res.status(200).json({
            message: 'Dodano nową pozycję do repertuaru:',
            info: doc,
        });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};

exports.movieDetails = (req, res, next) => {
    const id = req.params.movieId;
    Movie.findById(id)
    .then((doc) => {
        res.status(200).json({
            message: 'Szczegóły pozycji o identyfikatorze: ' + id,
            info: doc,
        });
    })
    .catch((err) => res.status(404).json({ wiadomość: err }));
};

exports.movieUpdate = (req, res, next) => {
    const id = req.params.movieId;
    Movie.findByIdAndUpdate(
        id, 
        {
            title: req.body.title,   
            genre: req.body.genre,
            duration: req.body.duration,
            screeingRoom: req.body.screeingRoom,
            minimalAge: req.body.minimalAge,
        },
        { new: true }
    )
    .then((doc) => {
        res.status(201).json({
            message: 'Zaktualizowano pozycję o identyfikatorze: ' + id,
            info: doc,
        });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};

exports.movieDelete = (req, res, next) => {
    const id = req.params.movieId;
    Movie.findByIdAndRemove(id)
    .then((doc) => {
        res.status(200).json({
            message: 'Usunięto pozycję o identyfikatorze: ' + id,
            info: doc,
        });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};