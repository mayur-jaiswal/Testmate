import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTest.css'

const CreateTest = () => {
    const navigate = useNavigate();
  const [test, setTest] = useState({
    title: '',
    description: '',
    type: 'GATE_PYQ',
    chapter: '',
    subject: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTest({
      ...test,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/createTest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(test),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Test created successfully');
        navigate(`/test-questionCreation`);
      } else {
        alert('Error creating test');
      }
    } catch (error) {
      console.error('Error creating test:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Test</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={test.title} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={test.description} onChange={handleChange}></textarea>

        <label>Test Type:</label>
        <select name="type" value={test.type} onChange={handleChange}>
          <option value="GATE_PYQ">GATE PYQ</option>
          <option value="MOCK_TEST">Mock Test</option>
          <option value="CUSTOM_TEST">Custom Test</option>
          <option value="CHAPTER_WISE">Chapter-wise</option>
          <option value="SUBJECT_WISE">Subject-wise</option>
        </select>

        {test.type === 'CHAPTER_WISE' && (
          <>
            <label>Chapter:</label>
            <input type="text" name="chapter" value={test.chapter} onChange={handleChange} />
          </>
        )}

        {test.type === 'SUBJECT_WISE' && (
          <>
            <label>Subject:</label>
            <input type="text" name="subject" value={test.subject} onChange={handleChange} />
          </>
        )}

        <label>Duration (minutes):</label>
        <input type="number" name="duration" value={test.duration} onChange={handleChange} />

        <button type="submit">Create Test</button>
      </form>
    </div>
  );
};

export default CreateTest;
