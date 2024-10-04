// index.js or app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/post');
const loginRoutes = require('./routes/login');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const app = express(); // Importing path module


require('dotenv').config();



// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../frontend')));

app.use('/api', loginRoutes); 
app.use('/', loginRoutes);  

app.use(session({
  secret: process.env.SESSION_SECRET || 'default_secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

//define 
app.use('/login', loginRoutes); // Prefix all login routes with /api/login
app.use('/posts', postRoutes); // Prefix all post routes with /api/posts


// Serve home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});