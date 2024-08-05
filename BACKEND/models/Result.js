// models/Result.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const TestAttempt = require('./TestAttempt');

const Result = sequelize.define('Result', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  attempt_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: TestAttempt, key: 'id' } },
  score: { type: DataTypes.DECIMAL(10, 2) },
});

module.exports = Result;
