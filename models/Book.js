const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('book_inventory', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
});

class Book extends Model {}

Book.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Categories', // name of Target model
      key: 'id', // key in Target model that we're referencing
    },
    allowNull: false
  },
}, {
  sequelize, // passing the `sequelize` instance is required
  modelName: 'Book', // We need to choose the model name
  timestamps: false  // disable timestamps
});

module.exports = Book;
