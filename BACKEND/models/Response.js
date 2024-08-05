// models/Response.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const TestAttempt = require('./TestAttempt');
const Question = require('./Question');
const Option = require('./Option');

const Response = sequelize.define('Response', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  attempt_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'testattempts', key: 'id' } },
  question_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Question, key: 'id' } },
  option_id: { type: DataTypes.INTEGER, references: { model: Option, key: 'id' } },
  numerical_response: { type: DataTypes.DECIMAL(10, 2) },
});

module.exports = Response;
