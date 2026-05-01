const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, enum: ['Finance', 'Insurance', 'Legal', 'Property', 'General'] },
  image: { type: String, default: 'https://placehold.co/400x250' },
  author: { type: String, default: 'Pryme Team' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
