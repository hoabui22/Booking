const express = require('express');
const bookingController = require('../controller/bookingController');
const router = express.Router();

function initWebRoute(app) {
    router.get('/', bookingController.getBooking);
    router.post('/bookings', bookingController.postBooking);

    return app.use('/', router)
}
module.exports = initWebRoute