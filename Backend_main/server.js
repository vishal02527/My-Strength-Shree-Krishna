const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt'); // Use bcrypt for password hashing
const cors = require('cors');


require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

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
  secret: 'yutgh',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Discussion forum route
app.get('/discussion-forum', (req, res) => {
  if (req.session.isLoggedIn) {
    res.sendFile(__dirname + '/discussion-forum.html'); // Serve the discussion forum page
  } else {
    res.redirect('/login'); // Redirect to login if not logged in
  }
});

// Signup Route
app.post('/signup', async (req, res) => {
  try {
    console.log('Received signup request:', req.body); // Debugging line
    const { username, email, password } = req.body;

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
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
    req.session.username = username; // Store username in session

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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
