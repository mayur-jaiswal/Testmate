// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  email: { type: DataTypes.STRING, primaryKey: true, allowNull: false,unique: true },
  username: { type: DataTypes.STRING, unique: true, allowNull: false, },
  password: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('student', 'teacher'), allowNull: false },
  branch: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at', defaultValue: DataTypes.NOW },
}, {
  timestamps: true,
  updatedAt: false
}); 

module.exports = User;
