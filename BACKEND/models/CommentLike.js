// models/CommentLike.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Comment = require('./Comment');
const User = require('./User');

const CommentLike = sequelize.define('CommentLike', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  comment_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Comment, key: 'id' } },
  user_id: { type: DataTypes.STRING, allowNull: false, references: { model: User, key: 'email' } },
}, {
  timestamps: false,
});

module.exports = CommentLike; 
