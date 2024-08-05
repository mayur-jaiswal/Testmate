// routes/testRoutes.js
const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');
const questionController = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');


// Create a new test
router.post('/createTest', testController.createTest);

// Get all tests
router.get('/getAllTests', testController.getAllTests);

// Get a single test by ID
router.get('getTestById/:id', testController.getTestById);

// Update a test
router.put('updateTestById/:id', testController.updateTest);

// Delete a test
router.delete('deleteTestById/:id', testController.deleteTest);



router.post('/start-test', testController.startTest);
router.post('/submit-response', testController.submitResponse);
router.post('/complete-test', testController.completeTest);

// Get all test attempts for a user
router.get('/attempts/user/:user_id', testController.getTestAttemptsByUser);

// Get a single test attempt by ID
router.get('/attempts/:id', testController.getTestAttemptById);

// Get results for a test attempt
router.get('/attempts/:attempt_id/results', testController.getTestAttemptResults);

// Get tests by filters
router.get('/tests-type', authMiddleware.authenticateToken, authMiddleware.extractBranchFromCookies, testController.getTestTypes);


router.post('/createQuestion', questionController.addQuestion);


module.exports = router;

