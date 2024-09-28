const cloudinary = require('cloudinary').v2;
const Question = require('../models/Question');
const Option = require('../models/Option');
const Comment = require('../models/Comment');
const CommentLike  = require('../models/CommentLike');
const TestAttempt  = require('../models/TestAttempt');  
const User  = require('../models/User');  
const Test  = require('../models/Test');  
require('dotenv').config();
const supportedTypes = ["image/jpeg", "image/jpg", "image/png"];


exports.getTestAnalysis = async (req, res) => {
  const { attemptId } = req.params;

  try {
    // Find the TestAttempt record
    const attempt = await TestAttempt.findByPk(attemptId, {
      include: [
        {
          model: Question,
          as: 'questions',
          include: [
            {
              model: Option,
              as: 'options',
            },
            {
              model: Comment,
              as: 'comments',
              include: [
                {
                  model: User, // Assuming User model exists for commenter details
                  attributes: ['username'], // Include username if needed
                },
              ],
            },
          ],
        },
        {
          model: Test, // Assuming Test model exists to get test name
          attributes: ['name'], // Get only the name attribute
        },  
      ],
    });

    if (!attempt) {
      return res.status(404).json({ success: false, message: 'No attempt found for this ID' });
    }

    const formattedQuestions = attempt.Questions.map((question) => {
      const userResponse = attempt.Responses.find((response) => response.question_id === question.id);
      const selectedOption = userResponse ? question.Options.find((option) => option.id === userResponse.option_id) : null;

      return {
        testName: attempt.Test.name, // Get test name from included Test model
        questionLink: question.question_link,
        options: question.Options.map((option) => ({
          text: option.option_text,
          isCorrect: option.is_correct,
          isSelected: selectedOption ? selectedOption.id === option.id : false,
        })),
        solutionLink: question.solution_link,
        referenceLink: question.reference_link,
        comments: question.Comments.map((comment) => ({
          id: comment.id,
          content: comment.content,
          createdAt: comment.createdAt,
          user: comment.User?.username, // Username from included User model
        })),
      };
    });

    return res.status(200).json({ success: true, questions: formattedQuestions });
  } catch (error) {
    console.error('Error fetching test analysis:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

  // Add a comment to a question
  exports.addComment = async (req, res) => {
    const { questionId, userId, content } = req.body;
  
    try {
      const newComment = await Comment.create({
        question_id: questionId,
        user_id: userId,
        content,
      });
  
      return res.status(201).json({ success: true, comment: newComment });
    } catch (error) {
      console.error('Error adding comment:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };
  
  // Like a comment
  exports.likeComment = async (req, res) => {
    const { commentId, userId } = req.body;
  
    try {
      const existingLike = await CommentLike.findOne({
        where: {
          comment_id: commentId,
          user_id: userId,
        },
      });
  
      if (existingLike) {
        return res.status(400).json({ success: false, message: 'You have already liked this comment' });
      }
  
      const like = await CommentLike.create({
        comment_id: commentId,
        user_id: userId,
      });
  
      return res.status(201).json({ success: true, like });
    } catch (error) {
      console.error('Error liking comment:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };

  async function uploadFileToCloudinary(file) {
    return await cloudinary.uploader.upload(file.tempFilePath, {
      folder: 'questions',
      resource_type: 'image'
    });
  }
  

  exports.addQuestion = async (req, res) => {
    try {
        const { test_id, question_type, options, marks, reference_link } = req.body;
        console.log(`test_id: ${test_id}, question_type: ${question_type}, options: ${JSON.stringify(options)}, marks: ${marks}, reference_link: ${reference_link}`);

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        const file = req.files.image;
        console.log(file);

        // Check if the file is of a supported type
        if (!supportedTypes.includes(file.mimetype)) {
            return res.status(400).send('Unsupported file type. Only jpg, jpeg, and png are allowed.');
        }

        // Check file size
        if (file.size > 1000 * 1024) { 
            return res.status(400).send('File size exceeds 1000kb limit.');
        }

        // Upload question image to Cloudinary
        const result = await uploadFileToCloudinary(file);
        console.log(`Cloudinary upload result (Question Image): ${JSON.stringify(result)}`);

        // Upload solution image if provided
        let solutionLink = null;
        if (req.files.solution) {
            const solutionFile = req.files.solution;

            // Check if the solution file is of a supported type
            if (!supportedTypes.includes(solutionFile.mimetype)) {
                return res.status(400).send('Unsupported solution file type. Only jpg, jpeg, and png are allowed.');
            }

            // Check solution file size
            if (solutionFile.size > 1000 * 1024) {
                return res.status(400).send('Solution file size exceeds 1000kb limit.');
            }

            // Upload solution image to Cloudinary
            const solutionResult = await uploadFileToCloudinary(solutionFile);
            console.log(`Cloudinary upload result (Solution Image): ${JSON.stringify(solutionResult)}`);
            solutionLink = solutionResult.secure_url;
        }

        // Create the question
        const question = await Question.create({
            test_id,
            question_link: result.secure_url,
            question_type,
            marks: marks || 1,
            solution_link: solutionLink, // Store the solution link
            reference_link // Store the reference link if provided
        });
        console.log(`Question created: ${JSON.stringify(question)}`);

        // Handle options for MSQ and MCQ
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

        // Send success response
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

exports.updateQuestion = async (req, res) => {
  try {
      const { question_id } = req.params;
      const { reference_link, marks } = req.body;

      // Find the question by ID
      const question = await Question.findByPk(question_id);
      if (!question) {
          return res.status(404).json({
              success: false,
              message: 'Question not found',
          });
      }

      // Check if a solution image is provided in the request
      let solutionLink = question.solution_link; // Keep existing solution_link if no new file is uploaded
      if (req.files && req.files.solution) {
          const solutionFile = req.files.solution;

          // Validate solution file type
          if (!supportedTypes.includes(solutionFile.mimetype)) {
              return res.status(400).send('Unsupported solution file type. Only jpg, jpeg, and png are allowed.');
          }

          // Validate solution file size
          if (solutionFile.size > 1000 * 1024) {
              return res.status(400).send('Solution file size exceeds 1000kb limit.');
          }

          // Upload the new solution image to Cloudinary
          const solutionResult = await uploadFileToCloudinary(solutionFile);
          console.log(`Cloudinary upload result (Solution Image): ${JSON.stringify(solutionResult)}`);
          solutionLink = solutionResult.secure_url; // Update solution link
      }

      // Update the question with new solution link and reference link
      question.solution_link = solutionLink;
      question.reference_link = reference_link || question.reference_link; // Update if provided, else keep the existing link
      question.marks = marks || question.marks; // Update marks if provided

      // Save the updated question
      await question.save();

      res.status(200).json({
          success: true,
          data: question,
          message: 'Question updated successfully',
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          success: false,
          message: 'Server error',
          error: error.message,
      });
  }
};
