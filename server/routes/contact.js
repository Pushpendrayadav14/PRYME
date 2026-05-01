const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const protect = require('../middleware/auth');

// Validation helper
const validateContact = ({ name, email, message }) => {
  const errors = [];
  if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters');
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push('Valid email is required');
  if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters');
  return errors;
};

// POST /api/contacts — public
router.post('/', async (req, res) => {
  const errors = validateContact(req.body);
  if (errors.length) return res.status(400).json({ success: false, errors });
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET /api/contacts — admin only
router.get('/', protect, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/contacts/:id — admin only
router.delete('/:id', protect, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
