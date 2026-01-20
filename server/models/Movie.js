const mongoose = require('mongoose');

const TypePriceSchema = new mongoose.Schema({
  type: [{ type: String, required: true }],
  price: [{ type: String, required: true }],
});

const ScreenSchema = new mongoose.Schema({
  screenName: { type: String, required: true },
  showTimes: [{ type: String, required: true }],
});

const TheaterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  screens: [ScreenSchema],
  isEnabled: { type: Boolean, default: true },
});

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  duration: { type: String, required: true },
  format: { type: String },
  language: [{ type: String, required: true }],
  releaseDate: { type: Date, required: true },
  imageUrl: { type: String },
  rating: { type: Number, min: 0, max: 10 },
  genre: [{ type: String, required: true }],
  certificate: [{ type: String }],
  cast: [
    {
      name: { type: String, required: true },
      imageFile: { type: String },
    },
  ],
  crew: [
    {
      name: { type: String, required: true },
      role: { type: String, required: true },
      imageFile: { type: String },
    },
  ],
  theaters: [TheaterSchema],
  typePrice: [TypePriceSchema],
}, { timestamps: true });

module.exports = mongoose.model('Movie', MovieSchema);
