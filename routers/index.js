const express = require('express');
const router = express.Router();
const Booking = require('../model/booking');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/bookings', async (req, res) => {
    try {
        const { fullName, phoneNumber, email, selectedSeats, totalPrice } = req.body;
        const booking = new Booking({
            fullName,
            phoneNumber,
            email,
            selectedSeats,
            totalPrice
        });
        await booking.save();
        res.status(201).send('Booking created successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
