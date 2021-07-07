const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const mongoose = require('mongoose');
const { use } = require("../routes/users");
const user = require("../models/user");

exports.getUsers = (req, res, next) => {    
    User.find()
        .then((docs) => {
            res.status(200).json({
                message: 'All users: ',
                info: docs,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        }) 
};

exports.postUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {   
        if (err) {
            res.status(500).json({ message: err });
        } else {
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash,
            });
            newUser.save((saveErr) => {
                if (saveErr) {
                    return res.status(412).send({
                        success: false,
                        message: saveErr
                    })
                }
            })
            return res.status(201).json({
                success: true,
                message: 'User successfully created',
                info: newUser
            });
        }
    })
};

exports.deleteUser = (req, res, next) => {
    User.remove({_id: req.params.userId})
        .then(user => {
            res.status(200).json(
                { message: 'User successfully deleted' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: err });
        }) 
};

exports.logIn = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
            res.status(404).json({ message: err });  
            }
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(412).send({
                        success: false,
                        message: err
                    })
                }
                if (result) {   
                    const token = jwt.sign(
                        {
                            email: user.email,
                            userId: user._id,
                        },
                        process.env.JWTpassword,
                        {
                            expiresIn: "10h"  
                        }
                    );
                    res.status(200).json({ 
                        message: 'User successfully logged in', 
                        token: token });
                } else {
                    res.status(401).json({ message: 'Invalid email or password' });  
                }
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({message: err});
        })
};