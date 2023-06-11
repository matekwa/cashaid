const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    mpesa_transactions: {
        type: Number,
        require: true,
        default: 0
    },
    credit_card_transactions: {
        type: Number,
        require: true,
        default: 0
    },
    cash_transactions: {
        type: Number,
        require: true,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users_table', signUpTemplate);

