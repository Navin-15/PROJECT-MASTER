const mongoose = require('mongoose');

const TheaterSchema = new mongoose.Schema({
  cinema: { type: String, required: true },
  screen: [{ type: String, required: true }],     // ✅ Multi-select support
  showTime: [{ type: String, required: true }],
  isEnabled: { type: Boolean, default: true } // ✅ important
});

module.exports = mongoose.model('Theater', TheaterSchema);
