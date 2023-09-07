const express = require('express');
const cors = require('cors');  // Import the CORS package
const { Sequelize } = require('sequelize');
const Book = require('./models/Book');
const Category = require('./models/Category');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Test database connection
const sequelize = new Sequelize('book_inventory', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Import routes
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Use routes
app.use('/api/books', bookRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
