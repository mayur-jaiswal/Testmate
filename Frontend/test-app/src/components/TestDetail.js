import React from 'react';
import { useParams } from 'react-router-dom';

function TestDetail() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Test Details for Test ID: {id}</h1>
    </div>
  );
}

export default TestDetail;
