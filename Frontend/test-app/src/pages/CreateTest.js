import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTest.css';

const CreateTest = () => {
  const navigate = useNavigate();

  // State to hold the test details
  const [test, setTest] = useState({
    title: '',
    description: '',
    type: 'GATE_PYQ',
    chapter: '',
    subject: '',
    duration: '',
    created_by: '', // This will be filled by user_id from localStorage
  });

  // On component mount, get the user_id from localStorage
  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      setTest((prevTest) => ({
        ...prevTest,
        created_by: userId, // Set the user_id in the test details
      }));
    } else {
      // If no user_id is found, redirect to login or handle accordingly
      alert('User is not logged in');
      navigate('/login');
    }
  }, [navigate]);

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
      const response = await fetch('http://localhost:8000/api/createTest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(test), // Include the created_by field in the request body
      });
      const data = await response.json();
      console.log(data.test_id)
      if (response.ok) {
        alert('Test created successfully');
        
        // Navigate to the question creation page, passing the test_id in the URL
        navigate(`/test-questionCreation/${data.test_id}`);
      } else {
        alert('Error creating test: ' + data.message);
      }
    } catch (error) {
      console.error('Error creating test:', error);
      alert('An error occurred while creating the test.');
    }
  };

  return (
    <div className='createTest-form'>
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
