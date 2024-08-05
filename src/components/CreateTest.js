import React, { useState } from 'react';
import { createTest } from '../api/testApi';

const CreateTest = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // Add more state variables as needed

  const handleSubmit = async (e) => {
    e.preventDefault();
    const test = { title, description };
    await createTest(test);
    // Handle success (e.g., redirect to test list)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      {/* Add more fields as needed */}
      <button type="submit">Create Test</button>
    </form>
  );
};

export default CreateTest;
