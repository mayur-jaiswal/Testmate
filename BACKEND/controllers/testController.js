// controllers/testController.js
const { Sequelize, Op } = require('sequelize');
const Test = require('../models/Test');
const Question = require('../models/Question');
const Option = require('../models/Option');
const TestAttempt = require('../models/TestAttempt');
const Response = require('../models/response');
const Result = require('../models/Result');
const User = require('../models/User'); // Assuming you need user data

// Create a new test
exports.createTest = async (req, res) => {
  try {
    const { title, description, type, created_by, chapter, subject, duration } = req.body;
    const test = await Test.create({ title, description, type, created_by, chapter, subject, duration });
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Error creating test', error: error.message });
  }
};

// Get all tests
exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.findAll();
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tests', error: error.message });
  }
};

// Get all test types
exports.getTestTypes = async (req, res) => {
  try {
    const testTypes = await Test.findAll({
      attributes: ['type'],
      group: ['type'], // Ensures that you get distinct test types if needed
    });
    res.status(200).json(testTypes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching test types', error: error.message });
  }
};

// Get a single test by ID
exports.getTestById = async (req, res) => {
  try {
    const { id } = req.params;
    const test = await Test.findByPk(id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching test', error: error.message });
  }
};

// Update a test
exports.updateTest = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, type, chapter, subject, duration } = req.body;
    const test = await Test.findByPk(id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    test.title = title;
    test.description = description;
    test.type = type;
    test.chapter = chapter;
    test.subject = subject;
    test.duration = duration;
    await test.save();
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Error updating test', error: error.message });
  }
};

// Delete a test
exports.deleteTest = async (req, res) => {
  try {
    const { id } = req.params;
    const test = await Test.findByPk(id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    await test.destroy();
    res.status(200).json({ message: 'Test deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting test', error: error.message });
  }
};



// Get all test attempts for a user
exports.getTestAttemptsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const testAttempts = await TestAttempt.findAll({ where: { user_id } });
    res.status(200).json(testAttempts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching test attempts', error: error.message });
  }
};

// Get a single test attempt by ID
exports.getTestAttemptById = async (req, res) => {
  try {
    const { id } = req.params;
    const testAttempt = await TestAttempt.findByPk(id);
    if (!testAttempt) {
      return res.status(404).json({ message: 'Test attempt not found' });
    }
    res.status(200).json(testAttempt);
  } catch (error) {
    res.status (500).json({ message: 'Error fetching test attempt', error: error.message });
  }
};

// Get results for a test attempt
exports.getTestAttemptResults = async (req, res) => {
  try {
    const { attempt_id } = req.params;
    const results = await Result.findAll({ where: { attempt_id } });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching test attempt results', error: error.message });
  }
};



exports.getTests = async (req, res) => {
  try {
    const { type, title, chapter, subject } = req.query;
    const branch = req.branch;

    const filter = { branch };

    if (type) {
      const validTypes = ['GATE_PYQ', 'MOCK_TEST', 'CUSTOM_TEST', 'CHAPTER_WISE', 'SUBJECT_WISE'];
      if (!validTypes.includes(type)) {
        return res.status(400).json({ message: 'Invalid test type provided' });
      }
      filter.type = type;
    }

    if (title) {
      filter.title = { [Op.like]: `%${title}%` };
    }

    if (chapter) {
      filter.chapter = { [Op.like]: `%${chapter}%` };
    }

    if (subject) {
      filter.subject = { [Op.like]: `%${subject}%` };
    }

    const tests = await Test.findAll({
      where: filter,
      attributes: ['id', 'title', 'description', 'chapter', 'subject', 'created_at'],
      order: [['created_at', 'DESC']],
    });

    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tests', error: error.message });
  }
};




exports.startTest = async (req, res) => {
  const { user_id, test_id } = req.body;

  try {
    // Check if the test exists
    const test = await Test.findByPk(test_id);
    if (!test) {
      return res.status(404).json({
        success: false,
        message: 'Test not found',
      });
    }
    //console.log(test);

    // Create a new test attempt
    const testAttempt = await TestAttempt.create({
      user_id,
      test_id,
      started_at: new Date(),
    });
    //console.log(testAttempt);

    // Get all questions for the test
    const questions = await Question.findAll({
      where: { test_id },
      include: [{ model: Option, as: 'options' }],
    });
    //console.log(questions);
    res.status(200).json({ 
      success: true,
      message: 'Test started successfully',
      testAttempt,
      questions,
    });
  } catch (error) {
    console.error('Error starting test:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while starting the test',
    });
  }
};

exports.submitResponse = async (req, res) => {
  const { attempt_id, question_id, option_ids, numerical_response } = req.body;

  try {
    // Check if the attempt exists
    const testAttempt = await TestAttempt.findByPk(attempt_id);
    if (!testAttempt) {
      return res.status(404).json({
        success: false,
        message: 'Test attempt not found',
      });
    }
    console.log("Test attempt found")
    // Create responses for multiple selected options if option_ids is an array
    if (Array.isArray(option_ids)) {
      const responses = [];
      for (const option_id of option_ids) {
        const response = await Response.create({
          attempt_id,
          question_id,
          option_id,
          numerical_response: null, // No numerical response for multiple select options
        });
        responses.push(response);
      }

      res.status(200).json({
        success: true,
        message: 'Responses submitted successfully',
        responses,
      });
    } else {
      // Create a single response for non-MSQ questions
      const response = await Response.create({
        attempt_id,
        question_id,
        option_id: option_ids, // option_ids is a single option_id in this case
        numerical_response,
      });

      res.status(200).json({
        success: true,
        message: 'Response submitted successfully',
        response,
      });
    }
  } catch (error) {
    console.error('Error submitting response:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while submitting the response',
    });
  }
};


exports.completeTest = async (req, res) => {
  const { attempt_id } = req.body;

  try {
    // Check if the attempt exists
    const testAttempt = await TestAttempt.findByPk(attempt_id);
    if (!testAttempt) {
      return res.status(404).json({
        success: false,
        message: 'Test attempt not found',
      });
    }
    console.log("Test attempt found");

    // Update the test attempt with the completion time
    testAttempt.completed_at = new Date();
    testAttempt.duration = Math.ceil((testAttempt.completed_at - testAttempt.started_at) / (1000 * 60)); // Duration in minutes
    await testAttempt.save();

    // Calculate the score (this example assumes each correct answer is worth the question's marks)
    const responses = await Response.findAll({
      where: { attempt_id },
      include: [{ model: Option }],
    });

    let score = 0;
    const questionResponseMap = {};

    // Group responses by question_id
    for (const response of responses) {
      if (!questionResponseMap[response.question_id]) {
        questionResponseMap[response.question_id] = [];
      }
      questionResponseMap[response.question_id].push(response);
    }

    // Calculate the score
    for (const question_id in questionResponseMap) {
      const responsesForQuestion = questionResponseMap[question_id];
      const question = await Question.findByPk(question_id);

      if (question.question_type === 'MSQ') {
        // MSQ scoring logic
        const correctOptions = await Option.findAll({
          where: { question_id, is_correct: true },
        });

        const correctOptionIds = correctOptions.map(opt => opt.id);
        const selectedOptionIds = responsesForQuestion.map(resp => resp.option_id);

        if (correctOptionIds.length === selectedOptionIds.length && correctOptionIds.every(optId => selectedOptionIds.includes(optId))) {
          score += question.marks;
        }
      } else {
        // Single correct option or numerical response scoring logic
        for (const response of responsesForQuestion) {
          if (response.option_id) {
            const option = await Option.findByPk(response.option_id);
            if (option && option.is_correct) {
              score += question.marks; // Use question.marks for scoring
            }
          } else if (response.numerical_response !== null) {
            // Handle numerical response scoring if applicable
          }
        }
      }
    }

    // Create a result record
    const result = await Result.create({
      attempt_id,
      score,
    });

    res.status(200).json({
      success: true,
      message: 'Test completed successfully',
      result,
    });
  } catch (error) {
    console.error('Error completing test:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while completing the test',
    });
  }
};
