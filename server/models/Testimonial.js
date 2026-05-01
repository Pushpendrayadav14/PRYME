const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  occupation: { type: String },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  avatar: { type: String, default: 'https://i.pravatar.cc/80' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
