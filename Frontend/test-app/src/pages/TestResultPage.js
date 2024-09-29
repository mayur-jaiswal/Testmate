import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TestResultPage.css';


const TestResultPage = () => {
  const { attemptId } = useParams(); // Get attempt ID from URL
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/complete-test', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ attempt_id: attemptId }),
        });

        const data = await response.json();
        console.log("response after hitting complete-test:", data);

        if (data.success) {
          setResult(data.result);
          // setAnalysis(data.analysis); // Set detailed analysis if available
        } else {
          console.error("Test completion failed:", data.message);
        }
      } catch (error) {
        console.error('Error fetching test result:', error);
      }
    };

    fetchResult();
  }, [attemptId]);

  const handleGoToDashboard = () => {
    navigate('/student-dashboard');
  };

  const handleViewAnalysis = () => {
    navigate(`/test-analysis/${attemptId}`);
  };

  if (!result) {
    return <div>Loading result...</div>;
  }

  return (
    <div className="test-result-page">
      <h1>Test Completed!</h1>
      <p>Your Score: {result.score}</p>

      <div className="buttons">
        <button onClick={handleGoToDashboard}>Go to Dashboard</button>
        <button onClick={handleViewAnalysis}>View Detailed Analysis</button>
      </div>
    </div>
  );
};

export default TestResultPage;
