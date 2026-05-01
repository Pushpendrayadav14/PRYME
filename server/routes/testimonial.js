const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET /api/testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/testimonials
router.post('/', async (req, res) => {
  try {
    const t = new Testimonial(req.body);
    await t.save();
    res.status(201).json(t);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
