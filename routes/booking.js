const express = require('express');
const { getBooking, getBookingById } = require('../controllers/bookingController');
const router =express.Router();


router.route('/booking').get(getBooking);
router.route('/booking/:id').get(getBookingById);

module.exports= router;