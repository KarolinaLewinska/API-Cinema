const mongoose = require('mongoose');
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.find()
        .then((docs) => {
            res.status(200).json({
                message: 'All products:',
                info: docs,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        })  
};

exports.postProduct = (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name, 
        price: req.body.price, 
    });
    product.save() 
        .then((doc) => { 
            res.status(200).json({ 
                message: 'Product successfully added',
                info: doc, 
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        }) 
};

exports.getProduct = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .then((doc) => {
            res.status(200).json({
                message: 'Product\'s details with id: ' + id,
                info: doc,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        }) 
};

exports.putProduct = (req, res, next) => {
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
            message: 'Product with id: ' + id + ' successfully updated',
            info: doc,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ message: err });
    }) 
};

exports.deleteProduct = (req, res, next) => {
    const id = req.params.productId;
    Product.findByIdAndDelete(id)
        .then((doc) => {
            res.status(200).json({
                message: 'Product with id: ' + id + ' successfully deleted',
                info: doc,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        })
};