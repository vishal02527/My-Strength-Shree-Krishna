// routes/user.js
const express = require('express');
const User = require('../models/User');
const Post = require('../models/Post');
const router = express.Router();

// Delete Account
router.delete('/delete', async (req, res) => {
    const userId = req.session.userId; // Get the authenticated user's ID

    if (!userId) {
        return res.status(401).send('Unauthorized');
    }

    // Delete the user account
    await User.findByIdAndDelete(userId);

    // Optionally, you can remove all posts by the user, but here we retain them
    // await Post.deleteMany({ author: userId });

    res.send('Account deleted successfully');
});

module.exports = router;
