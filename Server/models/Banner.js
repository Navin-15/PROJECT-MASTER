const mongoose = require('mongoose');
const bannerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // we’ll store the image as Base64 or URL
  enabled: { type: Boolean, default: true }  // ✅ Add this 
}, { timestamps: true });

module.exports = mongoose.model('Banner', bannerSchema);
