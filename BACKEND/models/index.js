// models/index.js
const sequelize = require('../config/database');
const Question = require('./Question');
const Option = require('./Option');
const Response = require('./response')
const TestAttempt = require('./TestAttempt')
const Comment = require('./Comment')

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

TestAttempt.hasMany(Question, {
  foreignKey: 'attemptId', // Foreign key in the Question table
  as: 'questions', // Alias for eager loading
});

Question.hasMany(Comment, { foreignKey: 'question_id', // Foreign key in the Question table
  as: 'comments', });

// Export all models
module.exports = {
  sequelize,
  Question,
  Option,
  Response,
  TestAttempt,
};
