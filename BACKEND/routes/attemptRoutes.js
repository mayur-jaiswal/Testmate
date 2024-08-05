const express = require('express');
const { createAttempt } = require('../controllers/attemptController');
const router = express.Router();

router.post('/attempts', createAttempt);

// Additional attempt routes can be added here

module.exports = router;
