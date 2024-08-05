// models/index.js
const sequelize = require('../config/database');
const Question = require('./Question');
const Option = require('./Option');
const Response = require('./response')

// Define associations
Question.hasMany(Option, {
  foreignKey: 'question_id',
  as: 'options',
});
console.log('Question hasMany Option association defined');

Option.belongsTo(Question, {
  foreignKey: 'question_id',
  as: 'question',
});
console.log('Option belongsTo Question association defined');

Option.hasMany(Response, { foreignKey: 'optionId' });
console.log('Question hasMany Option association defined');

Response.belongsTo(Option, { foreignKey: 'optionId' });
console.log('Response belongsTo Option association defined');

// Export all models
module.exports = {
  sequelize,
  Question,
  Option,
  Response,
};
