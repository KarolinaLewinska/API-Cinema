const mongoose = require('mongoose');
const Purchase = require('../models/purchase');

exports.getPurchases = (req, res, next) => {
    Purchase.find()
        .then((docs) => {
            res.status(200).json({
                message: 'All purchases:',
                info: docs,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        })  
};

exports.postPurchase = (req, res, next) => {
    const purchase = new Purchase({
        _id: new mongoose.Types.ObjectId(),
        productName: req.body.productName,
        amount: req.body.amount,
        cost: req.body.cost,
    });
    purchase.save()
        .then((doc) => { 
            res.status(200).json({ 
                wiadomość: 'Purchase successfully added',
                info: doc, 
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({message: err});
        })     
};

exports.getPurchase = (req, res, next) => {
    const id = req.params.purchaseId;
    Purchase.findById(id)
        .then((doc) => {
            res.status(200).json({
                message: 'Purchase\'s details with id: ' + id,
                info: doc,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        }) 
};

exports.putPurchase = (req, res, next) => {
    const id = req.params.purchaseId;
    Purchase.findByIdAndUpdate(
        id,
        {
            productName: req.body.productName,
            amount: req.body.amount,
            cost: req.body.cost,
            date: req.body.date,
        },
        { new: true }
    )
    .then((doc) => {
        res.status(200).json({ 
            message: 'Purchase with id ' + id + ' successfully updated',
            info: doc,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ message: err });
    }) 
};

exports.deletePurchase = (req, res, next) => {
    const id = req.params.purchaseId;
    Purchase.findByIdAndDelete(id)
        .then((doc) => {
            res.status(200).json({
                message: 'Purchase with id: ' + id + ' successfully deleted',
                info: doc,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        }) 
};