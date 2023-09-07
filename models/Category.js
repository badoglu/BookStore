const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('book_inventory', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
});

class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Category',
  timestamps: false  // disable timestamps
});

module.exports = Category;
