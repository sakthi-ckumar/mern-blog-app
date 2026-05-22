const Blog = require('../models/Blog');

exports.createBlog = async (
  req,
  res
) => {
  try {
    const {
      title,
      content,
      category,
    } = req.body;

    const blog = await Blog.create({
      title,
      content,
      category,
      image: req.file.filename,
      author: req.user.id,
    });

    res.status(201).json(blog);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getBlogs = async (
  req,
  res
) => {
  try {
    const blogs = await Blog.find();

    res.json(blogs);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getSingleBlog = async (
  req,
  res
) => {
  try {
    const blog = await Blog.findById(
      req.params.id
    );

    if (!blog) {
      return res.status(404).json({
        message: 'Blog not found',
      });
    }

    res.json(blog);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};