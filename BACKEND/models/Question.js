const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Test = require('./Test');

const Question = sequelize.define('Question', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  test_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Tests', // Name of the table
      key: 'id',
    },
  },
  question_link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question_type: {
    type: DataTypes.ENUM('MCQ', 'NUMERICAL','MSQ'),
    allowNull: false,
  },
  marks: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  createdAt: { type: DataTypes.DATE, field: 'created_at', defaultValue: DataTypes.NOW },
}, {
  timestamps: true,
  updatedAt: false,
});
console.log('Question model defined:', Question === sequelize.models.Question);

module.exports = Question;
