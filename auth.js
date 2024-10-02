// routes/auth.js
const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Invalid credentials');
    }

    // Create session or token
    req.session.userId = user._id; // or use JWT
    res.send('Login successful');
});

// Logout
router.post('/logout', (req, res) => {
    req.session.userId = null; // or invalidate the token
    res.send('Logout successful');
});

module.exports = router;
