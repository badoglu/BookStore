const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// Add a new book
router.post('/', async (req, res) => {
  const { title, author, category_id } = req.body;
  const newBook = await Book.create({ title, author, category_id });
  res.json(newBook);
});

module.exports = router;
