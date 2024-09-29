import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function TestListPage() {
  // Access the state passed via the navigate function
  const location = useLocation();
  const navigate = useNavigate();
  const { tests } = location.state || { tests: [] };

  const handleTestClick = (testId) => {
    // Navigate to the test interface page with the selected test ID
    navigate(`/test/${testId}`);
  };

  return (
    <div className="test-list-page" style={{ padding: '20px' }}>
      <h1>Available Tests</h1>  
      {tests.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {tests.map(test => (
            <div
              key={test.id}
              onClick={() => handleTestClick(test.id)} // Add click handler
              style={{
                backgroundColor: '#f4f4f4',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer' // Indicate clickable area
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 10px 0' }}>{test.title}</h3>
                <p style={{ margin: '0 0 10px 0' }}>{test.description}</p>
                <p><strong>Chapter:</strong> {test.chapter !== 'null' ? test.chapter : 'N/A'}</p>
                <p><strong>Subject:</strong> {test.subject !== 'null' ? test.subject : 'N/A'}</p>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#555' }}>
                <strong>Created At:</strong> {new Date(test.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No tests available in this category.</p>
      )}
    </div>
  );
}

export default TestListPage;
