const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    seatNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'booked', 'selected'],
        default: 'available'
    }
});

const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
