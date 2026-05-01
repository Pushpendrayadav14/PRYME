const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET || 'pryme_secret_key', { expiresIn: '7d' });

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    res.json({ token: generateToken(admin._id), username: admin.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/register  (only works if no admin exists yet — one-time setup)
router.post('/register', async (req, res) => {
  try {
    const count = await Admin.countDocuments();
    if (count > 0) return res.status(403).json({ error: 'Admin already exists. Use login.' });
    const { username, password } = req.body;
    const admin = await Admin.create({ username, password });
    res.status(201).json({ token: generateToken(admin._id), username: admin.username });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
