const { Sequelize } = require('sequelize');
const Book = require('./models/Book');
const Category = require('./models/Category');

// Initialize Sequelize
const sequelize = new Sequelize('book_inventory', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
});

// Seed Categories
const seedCategories = async () => {
  const categories = [
    { name: 'Fiction' },
    { name: 'Non-Fiction' },
    { name: 'Science' },
  ];
  for (const category of categories) {
    await Category.create(category);
  }
};

// Seed Books
const seedBooks = async () => {
  const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', category_id: 1 },
    { title: '1984', author: 'George Orwell', category_id: 1 },
    { title: 'A Brief History of Time', author: 'Stephen Hawking', category_id: 3 },
  ];
  for (const book of books) {
    await Book.create(book);
  }
};

// Run the seeder
const runSeeder = async () => {
  await sequelize.sync();
  await seedCategories();
  await seedBooks();
  console.log('Database seeded!');
  process.exit();
};

runSeeder().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit();
});
