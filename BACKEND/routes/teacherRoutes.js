const express = require('express');
const router = express.Router();
const {
    getAllTeachers,
    addTeacher,
    removeTeacher
} = require('../controllers/teacherController'); // Adjust the path as necessary

// Get all teachers
router.get('/teachers', getAllTeachers);

// Add a new teacher
router.post('/teachers', addTeacher);

// Remove a teacher
router.delete('/teachers/:id', removeTeacher);

module.exports = router;
