const mongoose = require('mongoose'); 

const purchaseSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    productName: String,
    amount: String,
    cost: Number,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Purchase", purchaseSchema);