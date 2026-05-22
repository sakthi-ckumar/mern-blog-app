const express = require('express');

const router = express.Router();

const {
  createBlog,
  getBlogs,
  getSingleBlog,
} = require('../controllers/blogController');

const authMiddleware = require(
  '../middleware/authMiddleware'
);

const upload = require(
  '../middleware/uploadMiddleware'
);

router.post(
  '/',
  authMiddleware,
  upload.single('image'),
  createBlog
);

router.get('/', getBlogs);

router.get('/:id', getSingleBlog);

module.exports = router;