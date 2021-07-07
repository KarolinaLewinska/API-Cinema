const mongoose = require('mongoose');
const Product = require('../models/product');

exports.allProducts = (req, res, next) => {
    Product.find()
    .then((docs) => {
        res.status(200).json({
            wiadomość: 'Dostępny asortyment:',
            info: docs,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({message: err});
    })  
};

exports.newProduct = (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name, 
        price: req.body.price, 
    });
    product.save() 
    .then((doc) => { 
        res.status(200).json({ 
            wiadomość: 'Dodano nowy produkt do oferty',
            info: doc, 
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({message: err});
    }) 
};

exports.productDetails = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .then((doc) => {
        res.status(200).json({
            wiadomość: 'Szczegóły produktu o nr ' + id,
            info: doc,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({message: err});
    }) 
};

exports.productUpdate = (req, res, next) => {
    const id = req.params.productId;
    Product.findByIdAndUpdate(
        id,
        {
            name: req.body.name,
            price: req.body.price,
        },
        { new: true }
    )
    .then((doc) => {
        res.status(201).json({ 
            wiadomość: 'Zaktualizowano produkt o nr ' + id,
            info: doc,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({message: err});
    }) 
};

exports.productDelete = (req, res, next) => {
    const id = req.params.productId;
    Product.findByIdAndDelete(id)
    .then((doc) => {
        res.status(200).json({
            wiadomość: 'Usunięto produkt o nr ' + id,
            info: doc,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({message: err});
    })
};