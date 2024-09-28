// models/Comment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');  // Assuming you have a User model

const Comment = sequelize.define('Comment', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  question_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Questions', key: 'id' } },
  user_id: { type: DataTypes.STRING, allowNull: false, references: { model: User, key: 'email' } },
  content: { type: DataTypes.TEXT, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  timestamps: true,
  updatedAt: false,
});

module.exports = Comment;
