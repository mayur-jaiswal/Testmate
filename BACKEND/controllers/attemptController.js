const TestAttempt = require('../models/TestAttempt');

exports.createAttempt = async (req, res) => {
  try {
    const attempt = await TestAttempt.create(req.body);
    res.status(201).json(attempt);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Additional attempt-related controller functions can be added here
