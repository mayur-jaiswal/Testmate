import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TestAnalysisPage.css';

const TestAnalysis = () => {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userId, setUserId] = useState(localStorage.getItem('user_id')); // Fetch user ID from local storage
  console.log(localStorage.getItem('user_id'));
  // Fetch test analysis data
  useEffect(() => {
    const fetchTestAnalysis = async () => {
      const response = await fetch(`http://localhost:8000/api/test-analysis/${attemptId}`);
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setQuestions(data.questions);
        if (data.questions.length > 0) {
          fetchComments(data.questions[0].questionId); // Fetch comments for the first question
        }
      }
    };
    fetchTestAnalysis();
  }, [attemptId]);


  // Fetch comments for a specific question
  const fetchComments = async (questionId) => {
    const response = await fetch(`http://localhost:8000/api/questions/${questionId}/getcomments`, {
      method: 'POST', // Assuming you want to use POST to send the userId
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }), // Pass the userId in the request body
    });

    const data = await response.json();
    if (data.success) {
      setComments(data.comments);
    }
    console.log(comments);
  };

  // Handle posting a new comment
  const handleAddComment = async () => {
    if (newComment.trim() === '') return;

    console.log(questions[currentQuestionIndex].id);

    const response = await fetch(`http://localhost:8000/api/questions/${questions[currentQuestionIndex].questionId}/addcomments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: newComment,
        question_id: questions[currentQuestionIndex].questionId,
        userId,
      }),
    });

    const data = await response.json();
    if (data.success) {
      setComments([data.comment, ...comments]);
      setNewComment(""); // Clear input field
    } else {
      console.error('Error adding comment:', data.message); // Log any errors from the API
    }
  };

  // Handle liking a comment
  const handleLikeComment = async (commentId) => {
    const response = await fetch('http://localhost:8000/api/comments/like', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ commentId, userId }),
    });

    const data = await response.json();
    if (data.success) {
      // Update the comments state with the new like count and likedByUser flag
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? { ...comment, likeCount: data.likeCount, likedByUser: true } // Ensure likeCount and likedByUser are updated
            : comment
        )
      );
      
    } else {
      console.error(data.message);
    }
  };

  const handleNextQuestion = () => {
    const nextIndex = Math.min(currentQuestionIndex + 1, questions.length - 1);
    setCurrentQuestionIndex(nextIndex);
    fetchComments(questions[nextIndex].questionId); // Use questionId instead of id
  };
  
  const handlePreviousQuestion = () => {
    const prevIndex = Math.max(currentQuestionIndex - 1, 0);
    setCurrentQuestionIndex(prevIndex);
    fetchComments(questions[prevIndex].questionId); // Use questionId instead of id
  };
  

  const handleEndAnalysis = () => {
    navigate('/student-dashboard');
  };

  return (
    <div className="test-analysis">
      <div className="question-container">
        {questions.length > 0 && (
          <div className="question-card">
            <h2>{questions[currentQuestionIndex].testName}</h2>
            <img
              src={questions[currentQuestionIndex].questionLink}
              alt={`Question ${currentQuestionIndex + 1}`}
              className="question-image"
            />
            <div className="options-container">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${option.isCorrect ? 'correct' : option.isSelected ? 'selected' : ''}`}
                >
                  {option.text}
                </div>
              ))}
            </div>
            <img
              src={questions[currentQuestionIndex].solutionLink}
              alt="Solution"
              className="solution-image"
            />
            <a href={questions[currentQuestionIndex].referenceLink} target="_blank" rel="noopener noreferrer">
              Reference Link
            </a>

            {/* Comments Section */}
            <div className="comments-section">
              <h3>Comments</h3>
              <div className="comments-list">
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <div key={index} className="comment">
                      <p>
                        <strong>{comment.user_id}:</strong> {comment.content}
                      </p>
                      <div className="comment-actions">
                        
                        <span>{comment.likeCount}</span>  {/* Display likes count */}
                        <button 
                          className='like-button'
                          disabled={comment.likedByUser === true} // Disable if liked
                          onClick={() => handleLikeComment(comment.id)}
                        >
                          Like
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No comments yet.</p>
                )}
              </div>
              <div className="add-comment">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                ></textarea>
                <button onClick={handleAddComment}>Post Comment</button>
              </div>
            </div>

            <div className="navigation-buttons">
              <button onClick={handlePreviousQuestion} className="navigation-button">Previous</button>
              <button onClick={handleNextQuestion} className="navigation-button">Next</button>
            </div>
          </div>
        )}
      </div>

      <div className="sidebar">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`sidebar-item ${currentQuestionIndex === index ? 'active' : ''}`}
            onClick={() => {
              setCurrentQuestionIndex(index);
              fetchComments(question.id);
            }}
          >
            {index + 1}
          </div>
        ))}
        <button onClick={handleEndAnalysis} className="done-button">Done</button>
      </div>
    </div>
  );
};

export default TestAnalysis;
