// routes/testRoutes.js
const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');
const questionController = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');
const { updateQuestion } = require('../controllers/questionController');

// Route to update an existing question (add solution link and reference link)
router.put('/UpdateQuestion', updateQuestion);

// Create a new test
router.post('/createTest', testController.createTest);

// Get all tests
router.get('/getAllTests', testController.getAllTests);

// Get a single test by ID
router.get('/getTestById/:id', testController.getTestById);  
// Get a test on various parameter 
router.get('/getTests',testController.getTests);

// Update a test
router.put('/updateTestById/:id', testController.updateTest);   ``

// Delete a test
router.delete('/deleteTestById/:id', testController.deleteTest);



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
router.get('/:type', testController.getTestTypes);


router.post('/createQuestion', questionController.addQuestion);


// Route to get question analysis
router.get('/test-analysis/:attemptId', questionController.getTestAnalysis);
// Route to add a comment
router.post('/questions/:questionId/comments', questionController.addComment);
// Route to like a comment
router.post('/comments/like', questionController.likeComment);

module.exports = router;

