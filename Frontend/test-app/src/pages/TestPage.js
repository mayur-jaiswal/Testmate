import React from 'react';
import { useLocation } from 'react-router-dom';

function TestPage() {
  const location = useLocation();
  const { tests } = location.state || { tests: [] };

  return (
    <div>
      <h1>Tests</h1>
      {tests.length > 0 ? (
        <ul>
          {tests.map(test => (
            <li key={test.id}>
              <h3>{test.title}</h3>
              <p>{test.description}</p>
              <p>Chapter: {test.chapter}</p>
              <p>Subject: {test.subject}</p>
              <p>Created At: {new Date(test.created_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tests available for this category.</p>
      )}
    </div>
  );
}

export default TestPage;
