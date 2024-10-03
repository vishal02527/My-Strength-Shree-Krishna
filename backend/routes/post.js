const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//Fetch all the posts saved
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error getting posts', error });
  }
});


// Create a new post
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const newPost = new Post({
      title,
      content,
      author,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
});

module.exports = router;