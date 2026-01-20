const mongoose = require ("mongoose");
const blockedSeatsSchema = new mongoose.Schema({
  theater: { type: String, required: true },
  movieName: { type: String, required: true },
  screen: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  seats: { type: [String], required: true }
});

const BlockedSeats = mongoose.model('BlockedSeats', blockedSeatsSchema);
module.exports = BlockedSeats;

