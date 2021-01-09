const express = require('express');
const router = express.Router();
const MoviesController = require('../controllers/movies');
const checkAuth = require('../middleware/check-auth');


router.get('/', checkAuth, MoviesController.allMovies);
router.post('/', checkAuth,  MoviesController.newMovie);
router.get('/:movieId', checkAuth,  MoviesController.movieDetails);
router.patch('/:movieId', checkAuth,  MoviesController.movieUpdate);
router.delete('/:movieId', checkAuth, MoviesController.movieDelete);

module.exports = router;

