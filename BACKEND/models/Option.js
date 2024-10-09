const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Question = require('./Question');

// Define the Option model
const Option = sequelize.define('Option', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Questions', // Make sure this matches the table name in the database
      key: 'id',
    },
    onDelete: 'CASCADE', // This will delete options if the related question is deleted
  },
  option_text: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_correct: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
  updatedAt: false, // Only care about the createdAt timestamp
});

// Export the Option model
module.exports = Option;
