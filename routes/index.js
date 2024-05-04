const express = require('express');
const router = express.Router();
const Seat = require('../model/seat');

// Define your routes
router.get('/', (req, res) => {
    res.render('index');
});

router.post('/booking', async (req, res) => {
    try {
        // Lấy thông tin vé từ yêu cầu POST
        const { fullName, phoneNumber, email, selectedSeats, totalPrice } = req.body;

        // Lưu thông tin vé vào MongoDB
        const booking = new Seat({
            fullName,
            phoneNumber,
            email,
            selectedSeats,
            totalPrice
        });
        await booking.save();

        res.send('Đã đặt vé thành công!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Đã xảy ra lỗi khi đặt vé.');
    }
});

module.exports = router;
