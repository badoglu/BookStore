const express = require('express');
const Category = require('../models/Category');

const router = express.Router();

// Get all categories
router.get('/', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

// Add a new category
router.post('/', async (req, res) => {
  const { name } = req.body;
  const newCategory = await Category.create({ name });
  res.json(newCategory);
});

module.exports = router;
