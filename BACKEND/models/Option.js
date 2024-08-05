// models/Option.js
const { Model,DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Question = require('./Question');


const Option = sequelize.define('Option', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  question_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Questions', key: 'id' } },
  option_text: { type: DataTypes.STRING, allowNull: true },
  is_correct: { type: DataTypes.BOOLEAN, allowNull: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at', defaultValue: DataTypes.NOW },
}, {
  timestamps: true,
  updatedAt: false,
});

console.log('Option model defined:', Option === sequelize.models.Option);
module.exports = Option;
