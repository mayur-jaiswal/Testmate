const Teacher = require('../models/Teacher'); // Assuming you have a Teacher model

// Get all teachers
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// Add a new teacher
exports.addTeacher = async (req, res) => {
    try {
        const newTeacher = new Teacher({ name: req.body.name });
        await newTeacher.save();
        res.status(201).json(newTeacher);
    } catch (error) {
        res.status(400).json({ message: 'Bad Request', error });
    }
};

// Remove a teacher
exports.removeTeacher = async (req, res) => {
    try {
        await Teacher.findByIdAndDelete(req.params.id);
        res.sendStatus(204); // No Content
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
