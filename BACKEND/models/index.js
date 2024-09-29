const sequelize = require('../config/database');
const User = require('./User');
const Test = require('./Test');
const TestAttempt = require('./TestAttempt');
const Question = require('./Question');
const Response = require('./response');
const Option = require('./Option');
const Comment = require('./Comment');
const CommentLike = require('./CommentLike');

// Define associations

// User can create multiple tests
User.hasMany(Test, {
  foreignKey: 'created_by',  // User creates the test
  as: 'tests',
});
Test.belongsTo(User, {
  foreignKey: 'created_by',
  as: 'creator',
});

// User can attempt multiple tests
User.hasMany(TestAttempt, {
  foreignKey: 'user_id',  // User attempts the test
  as: 'testAttempts',
});
TestAttempt.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

// Test can have multiple attempts by different users
Test.hasMany(TestAttempt, {
  foreignKey: 'test_id',  // Test being attempted
  as: 'testAttempts',
});
TestAttempt.belongsTo(Test, {
  foreignKey: 'test_id',
  as: 'test',
});

// Test can have multiple questions
Test.hasMany(Question, {
  foreignKey: 'test_id',  // Test containing the questions
  as: 'questions',
});
Question.belongsTo(Test, {
  foreignKey: 'test_id',
  as: 'test',
});

// Question can have multiple options
Question.hasMany(Option, {
  foreignKey: 'question_id',  // Options for the question
  as: 'options',
});
Option.belongsTo(Question, {
  foreignKey: 'question_id',
  as: 'question',
});

// TestAttempt can have multiple responses (one per question)
TestAttempt.hasMany(Response, {
  foreignKey: 'attempt_id',  // Responses in the attempt
  as: 'responses',
});
Response.belongsTo(TestAttempt, {
  foreignKey: 'attempt_id',
  as: 'testAttempt',
});

// Response relates to a specific question and option
Response.belongsTo(Question, {
  foreignKey: 'question_id',  // Question that was answered
  as: 'question',
});
Response.belongsTo(Option, {
  foreignKey: 'option_id',  // Option selected in the response
  as: 'option',
});

// Comments on questions (not directly related to responses or attempts)
Comment.belongsTo(Question, {
  foreignKey: 'question_id',  // Comment on the question
  as: 'question',
});
Question.hasMany(Comment, {
  foreignKey: 'question_id',
  as: 'comments',
});

// Comment belongs to a user (who made the comment)
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

// User can like multiple comments
User.hasMany(CommentLike, {
  foreignKey: 'user_id',  // User who liked a comment
  as: 'likedComments',
});
CommentLike.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

// Comment can have multiple likes
Comment.hasMany(CommentLike, {
  foreignKey: 'comment_id',  // Likes on the comment
  as: 'likes',
});
CommentLike.belongsTo(Comment, {
  foreignKey: 'comment_id',
  as: 'comment',
});

// Export all models and the sequelize instance
module.exports = {
  sequelize,
  User,
  Test,
  TestAttempt,
  Question,
  Response,
  Option,
  Comment,
  CommentLike,
};
