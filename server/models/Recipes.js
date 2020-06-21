const Sequelize = require('sequelize')
const sequelize = require('../utils/dbConnect')

// Описание модели таблицы в БД MySQL
const Recipes = sequelize.define('recipes', {
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  products: {
    type: Sequelize.STRING,
    allowNull: true
  },
  cookingTimes: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  cookingSkill: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

module.exports = Recipes
