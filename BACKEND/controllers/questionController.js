const cloudinary = require('cloudinary').v2;
const Question = require('../models/Question');
const Option = require('../models/Option');
require('dotenv').config();
const supportedTypes = ["image/jpeg", "image/jpg", "image/png"];


  // Function to upload file to Cloudinary
  async function uploadFileToCloudinary(file) {
    return await cloudinary.uploader.upload(file.tempFilePath, {
      folder: 'questions',
      resource_type: 'image'
    });
  }
  

  exports.addQuestion = async (req, res) => {
    try {
        const { test_id, question_type, options, marks } = req.body;
        console.log(`test_id: ${test_id}, question_type: ${question_type}, options: ${JSON.stringify(options)}, marks: ${marks}`);

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        const file = req.files.image;
        console.log(file);

        if (!supportedTypes.includes(file.mimetype)) {
            return res.status(400).send('Unsupported file type. Only jpg, jpeg, and png are allowed.');
        }

        if (file.size > 1000 * 1024) { // 1mb limit
            return res.status(400).send('File size exceeds 1000kb limit.');
        }

        // Upload file to Cloudinary
        const result = await uploadFileToCloudinary(file);
        console.log(`Cloudinary upload result: ${JSON.stringify(result)}`);

        // Create question in the database
        const question = await Question.create({
            test_id,
            question_link: result.secure_url,
            question_type,
            marks: marks || 1 // Default to 1 if marks is not provided
        });
        console.log(`Question created: ${JSON.stringify(question)}`);

        // Validate and create options in the database
        if ((question_type === 'MSQ' || question_type === 'MCQ') && options) {
            let parsedOptions;
            try {
                parsedOptions = JSON.parse(options);
            } catch (error) {
                return res.status(400).send('Options must be a valid JSON array.');
            }

            if (Array.isArray(parsedOptions)) {
                for (const option of parsedOptions) {
                    console.log(`Creating option: ${JSON.stringify(option)}`);
                    await Option.create({
                        question_id: question.id,
                        option_text: option.option_text,
                        is_correct: option.is_correct
                    });
                }
                console.log("Options created successfully");
            } else {
                return res.status(400).send('Options must be an array.');
            }
        } else if (question_type === 'MSQ' || question_type === 'MCQ') {
            return res.status(400).send('Options are required for MSQ and MCQ question types.');
        }

        res.status(201).json({
            success: true,
            data: question,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};


