const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  seats: [String],
  totalPrice: Number,
  theatre: String,
  showTime: String,
  bookedAt: Date,
});

module.exports = mongoose.model('Booking', bookingSchema);