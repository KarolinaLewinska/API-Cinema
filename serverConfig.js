const express = require('express');
const morgan = require('morgan'); 
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');  

const app = express();

const movieRoutes = require('./api/routes/movies');
const productRoutes = require('./api/routes/products');
const purchaseRoutes = require('./api/routes/purchases');
const userRoutes = require('./api/routes/users');

mongoose.connect (
    'mongodb+srv://cinemaAdmin:' + process.env.dbPassword +
    '@cinema.tahqb.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(morgan('combined'));

app.use(bodyParser.json());

app.use('/movies', movieRoutes);
app.use('/products', productRoutes);
app.use('/purchases', purchaseRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
    const error = new Error("Nieprawidłowe żądanie");
    error.status = 400;
    next(error);
});
app.use((req, res, next) => {
    const error = new Error("Dostęp do zasobu zabroniony")
    error.status = 403;
    next(error);
})
app.use((req, res, next) => {
    const error = new Error("Nie odnaleziono podanego zasobu");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({ message: error.message});  
});

module.exports = app;
