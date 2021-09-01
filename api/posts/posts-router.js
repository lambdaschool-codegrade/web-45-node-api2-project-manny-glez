// implement your posts router here
const express = require('express');
const Post = require('./posts-model');
const router = express.Router()

//POSTS ENDPOINTS
router.get('/', (req, res) => {
  Post.find(req.query)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retreving posts',
      });
    });
});

module.exports = router;