
const express = require('express');
const router = express.Router();
const session = require('express-session');
const bcrypt = require('bcrypt'); 
const path = require('path');
const User = require('../models/user');


router.use(session({
  secret: process.env.SESSION_SECRET || 'default_secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));


  //signup route
  
  router.post('/signup', async (req, res) => {
    
    try {
      const { username, email, password } = req.body;
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists. Please log in ', redirect: '/login' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
  
      await newUser.save();

  
      // Set session variables
      req.session.isLoggedIn = true;
      req.session.username = username;
  
      console.log('Signup successful, session variables set:', req.session);

  
      // Redirect to discussion forum after signup
      return res.status(201).json({ message: 'Signup successful', redirect: '/discussion-forum' });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Error signing up' });
    }
  });
  
  
  // Login Route
  router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const foundUser = await User.findOne({ username });
  
      if (!foundUser) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
     
      const isMatch = await bcrypt.compare(password, foundUser.password);
      if (isMatch) {
        req.session.isLoggedIn = true;
        req.session.username = username;
        return res.json({ message: 'Login successful' });
      } else {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error logging in' });
    }
  });
  
  // Check if user is logged in
  router.get('/check-login', (req, res) => {
    if (req.session.isLoggedIn) {
      res.redirect('/discussion-forum');
    } else {
      res.redirect('/login_mongo');
    }
  });

  // Discussion forum route
router.get('/discussion-forum', (req, res) => {
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(__dirname, '..','..','frontend', 'discussion-forum.html')); // Adjust the path
  } else {
    res.redirect('/login');
  }
});
  
  router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..','..','frontend', 'login_mongo.html')); // Adjust the path to your login.html file
  });
  
  
 

  module.exports = router;