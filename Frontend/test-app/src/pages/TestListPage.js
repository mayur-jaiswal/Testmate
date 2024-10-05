import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function TestListPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { tests } = location.state || { tests: [] };

  const handleTestClick = (testId) => {
    navigate(`/test/${testId}`);
  };

  return (
    <div className="test-list-page" style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8ff', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', fontSize: '2.5rem', marginBottom: '40px' }}>Available Tests</h1>
      
      {tests.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {tests.map(test => (
            <div
              key={test.id}
              onClick={() => handleTestClick(test.id)}
              style={{
                backgroundColor: '#f5fffa',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                overflow: 'hidden',
                position: 'relative'
              }}
              className="test-card"
            >
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#2980b9' }}>{test.title}</h3>
                <p style={{ margin: '0 0 10px 0', color: '#34495e' }}>{test.description}</p>
                <p style={{ marginBottom: '5px' }}><strong>Chapter:</strong> {test.chapter !== 'null' ? test.chapter : 'N/A'}</p>
                <p><strong>Subject:</strong> {test.subject !== 'null' ? test.subject : 'N/A'}</p>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#7f8c8d', marginTop: '20px' }}>
                <strong>Created At:</strong> {new Date(test.created_at).toLocaleDateString()}
              </p>
              {/* Background Animation */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #3498db 0%, #9b59b6 100%)',
                opacity: '0',
                zIndex: '0',
                transition: 'opacity 0.3s ease'
              }} className="hover-bg"></div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#e74c3c', fontSize: '1.2rem' }}>No tests available in this category.</p>
      )}

      {/* Internal CSS */}
      <style>{`
        .test-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        
        .test-card:hover .hover-bg {
          opacity: 0.2;
        }
        
        .test-card h3 {
          transition: color 0.3s ease;
        }
        
        .test-card:hover h3 {
          color: #8e44ad;
        }
        
        .test-card p {
          transition: color 0.3s ease;
        }
        
        .test-card:hover p {
          color: #2c3e50;
        }
      `}</style>
    </div>
  );
}

export default TestListPage;
