const mongoose = require('mongoose');

// define donation schema
const donationSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    message: String,
    status: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;