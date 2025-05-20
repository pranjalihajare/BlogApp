const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.post('/save-draft', async (req, res) => {
  const { id, title, content, tags } = req.body;
  try {
    let blog;
    if (id) {
      blog = await Blog.findByIdAndUpdate(
        id,
        {
          title,
          content,
          tags: Array.isArray(tags) ? tags : [],
          status: 'draft',
          updated_at: new Date()
        },
        { new: true }
      );
    } else {
      blog = await Blog.create({
        title,
        content,
        tags: Array.isArray(tags) ? tags : [],
        status: 'draft'
      });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save draft' });
  }
});

router.post('/publish', async (req, res) => {
  const { id, title, content, tags } = req.body;
  try {
    let blog;
    if (id) {
      blog = await Blog.findByIdAndUpdate(
        id,
        {
          title,
          content,
          tags: Array.isArray(tags) ? tags : [],
          status: 'published',
          updated_at: new Date()
        },
        { new: true }
      );
    } else {
      blog = await Blog.create({
        title,
        content,
        tags: Array.isArray(tags) ? tags : [],
        status: 'published'
      });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to publish post' });
  }
});

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve blogs' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve blog' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await Blog.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

router.put('/:id', async (req, res) => {
  const { title, content, tags, status } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        tags: Array.isArray(tags) ? tags : [],
        status,
        updated_at: new Date()
      },
      { new: true }
    );
    if (!updatedBlog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
});

module.exports = router;