const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: String,
  designation: String,
  password: { type: String, required: true },
  permissions: {
    user: Boolean,
    theater: Boolean,
    movie: Boolean,
    banner: Boolean,
    booking: Boolean,
    customer: Boolean,
    theaterseats: Boolean, // Added permission
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

