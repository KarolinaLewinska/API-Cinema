const mongoose = require('mongoose');

const Purchase = require('../models/purchase');

exports.allPurchases = (req, res, next) => {
    Purchase.find()
        .then((docs) => {
            res.status(200).json({
                wiadomość: 'Historia dokonanych zakupów:',
                info: docs,
            });
        })
        .catch((err) => res.status(503).json({ wiadomość: err })); 
};

exports.newPurchase = (req, res, next) => {
    const purchase = new Purchase({
        _id: new mongoose.Types.ObjectId(),
        productName: req.body.productName,
        amount: req.body.amount,
        cost: req.body.cost,
    });
    purchase
        .save()
        .then((doc) => {
            res.status(200).json({
                wiadomość: 'Dodano do historii zakupów:',
                info: doc,
            });
        })
        .catch((err) => res.status(500).json({ wiadomość: err }));
};

exports.purchaseDetails = (req, res, next) => {
    const id = req.params.purchaseId;
    Purchase.findById(id)
        .then((doc) => {
            res.status(200).json({
                wiadomość: 'Szczegóły zakupów o nr ' + id,
                info: doc,
            });
        })
        .catch((err) => res.status(404).json({ wiadomość: err })); 
};

exports.purchaseUpdate = (req, res, next) => {
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
            res.status(201).json({ 
                wiadomość: 'Zaktualizowano zakupy o nr ' + id,
                info: doc,
            });
        })
        .catch((err) => res.status(500).json({ wiadomość: err }));
};

exports.purchaseDelete = (req, res, next) => {
    const id = req.params.purchaseId;
    Purchase.findByIdAndDelete(id)
        .then((doc) => {
            res.status(200).json({
                wiadomość: 'Usunięto zakupy o nr ' + id,
                info: doc,
            });
        })
        .catch((err) => res.status(500).json({ wiadomość: err }));
};