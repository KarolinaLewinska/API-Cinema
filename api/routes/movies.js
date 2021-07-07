const express = require('express');
const router = express.Router();
const MoviesController = require('../controllers/movies');
const checkAuth = require('../middleware/check-auth');
const moviesValidationMiddleware = require('../middleware/movies-validation')

router.get('/', checkAuth, MoviesController.getMovies);
router.post('/', checkAuth, moviesValidationMiddleware.moviesValidator, MoviesController.postMovie);
router.get('/:movieId', checkAuth,  MoviesController.getMovie);
router.put('/:movieId', checkAuth, moviesValidationMiddleware.moviesValidator,  MoviesController.putMovie);
router.delete('/:movieId', checkAuth, MoviesController.deleteMovie);

module.exports = router;

