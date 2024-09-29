import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TestAnalysis = () => {
  const { attemptId } = useParams();
  const [questions, setQuestions] = useState([]); 

  useEffect(() => {
    // Fetch test analysis data from the backend
    const fetchTestAnalysis = async () => {
      const response = await fetch(`http://localhost:8000/api/test-analysis/${attemptId}`);
      const data = await response.json();
      if (data.success) {
        setQuestions(data.questions);
      }
    };

    fetchTestAnalysis();
  }, [attemptId]);

  const handleLikeComment = async (commentId) => {
    await fetch('/api/like-comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment_id: commentId }),
    });

    // Refresh the data after liking
    const response = await fetch(`/api/test-analysis/${attemptId}`);
    const data = await response.json();
    if (data.success) {
      setQuestions(data.questions);
    }
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <img src={question.question_link} alt={`Question ${index + 1}`} />
          <div>
            <strong>Your Answer:</strong>
            <span style={{ color: question.isCorrect ? 'green' : 'red' }}>
              {question.userAnswer}
            </span>
          </div>
          {!question.isCorrect && (
            <div>
              <strong>Correct Answer:</strong>
              <span style={{ color: 'green' }}>{question.correctAnswer}</span>
            </div>
          )}
          <img src={question.solution_link} alt="Solution" />

          {/* Comments Section */}
          <div>
            <h4>Comments</h4>
            {question.comments.map((comment, idx) => (
              <div key={idx}>
                <p>{comment.content}</p>
                <span>Likes: {comment.likes}</span>
                <button onClick={() => handleLikeComment(comment.id)}>Like</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestAnalysis;
