const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt'); // Use bcrypt for password hashing
const path = require('path');
const cors = require('cors');


require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..')));

const PORT = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});
const User = mongoose.model('User', userSchema);

app.use(session({
  secret: process.env.SESSION_SECRET || 'default_secret', // Use an environment variable for the secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' } // Set to true in production
}));

// Discussion forum route
app.get('/discussion-forum', (req, res) => {
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(__dirname, '..', 'discussion-forum.html')); // Adjust the path
  } else {
    res.redirect('/login');
  }
});

//signup route

app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists. Please log in ', redirect: '/login' });
    }

    // Hash the password
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
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username });

    if (!foundUser) {
      return res.status(401).send({ message: 'Invalid username or password' });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (isMatch) {
      req.session.isLoggedIn = true;
      req.session.username = username;
      return res.json({ message: 'Login successful' });
    } else {
      return res.status(401).send({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error logging in' });
  }
});

// Check if user is logged in
app.get('/check-login', (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect('/discussion-forum');
  } else {
    res.redirect('/login');
  }
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'login.html')); // Adjust the path to your login.html file
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html')); // Serve the index.html file
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
