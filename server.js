// server.js
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/discussion-forum', { useNewUrlParser: true, useUnifiedTopology: true });

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
