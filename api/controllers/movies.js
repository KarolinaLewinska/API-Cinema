const mongoose = require('mongoose');
const Movie = require('../models/movie');

exports.getMovies = (req, res, next) => {    
    Movie.find()
        .then((docs) => {
            res.status(200).json({
                message: 'All movies: ',
                info: docs,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        })     
};

exports.postMovie = (req, res, next) => {
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
                message: 'Movie successfully added',
                info: doc,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        }) 
};

exports.getMovie = (req, res, next) => {
    const id = req.params.movieId;
    Movie.findById(id)
        .then((doc) => {
            res.status(200).json({
                message: 'Movie\'s details with id: ' + id,
                info: doc,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        }) 
};

exports.putMovie = (req, res, next) => {
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
            message: 'Movie with id: ' + id + ' successfully updated',
            info: doc,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ message: err });
    }) 
};

exports.deleteMovie = (req, res, next) => {
    const id = req.params.movieId;
    Movie.findByIdAndRemove(id)
        .then((doc) => {
            res.status(200).json({
                message: 'Movie with id: ' + id + ' successfully deleted',
                info: doc,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        }) 
};