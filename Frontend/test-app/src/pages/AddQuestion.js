import React, { useState } from 'react';
import './AddQuestion.css';

const AddQuestion = ({ testId }) => {
  const [question, setQuestion] = useState({
    question_type: 'MCQ',
    marks: 1,
    reference_link: '',
    options: [],
  });

  const [image, setImage] = useState(null);
  const [solution, setSolution] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion({
      ...question,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSolutionChange = (e) => {
    setSolution(e.target.files[0]);
  };

  const addOption = () => {
    setQuestion({
      ...question,
      options: [...question.options, { option_text: '', is_correct: false }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('test_id', testId);
    formData.append('question_type', question.question_type);
    formData.append('marks', question.marks);
    formData.append('reference_link', question.reference_link);
    formData.append('image', image);  // Upload image
    formData.append('solution', solution);  // Upload solution image

    question.options.forEach((option, index) => {
      formData.append(`options[${index}][option_text]`, option.option_text);
      formData.append(`options[${index}][is_correct]`, option.is_correct);
    });

    try {
      const response = await fetch(`/api/tests/${testId}/questions/add`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Question added successfully');
      } else {
        alert('Error adding question');
      }
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  return (
    <div>
      <h2>Add a Question</h2>
      <form onSubmit={handleSubmit}>
        <label>Question Type:</label>
        <select name="question_type" value={question.question_type} onChange={handleChange}>
          <option value="MCQ">MCQ</option>
          <option value="MSQ">MSQ</option>
          <option value="NUMERICAL">Numerical</option>
        </select>

        <label>Marks:</label>
        <input type="number" name="marks" value={question.marks} onChange={handleChange} />

        <label>Reference Link:</label>
        <input type="url" name="reference_link" value={question.reference_link} onChange={handleChange} />

        <label>Question Image:</label>
        <input type="file" onChange={handleFileChange} />

        <label>Solution Image:</label>
        <input type="file" onChange={handleSolutionChange} />

        {question.question_type === 'MCQ' || question.question_type === 'MSQ' ? (
          <>
            <button type="button" onClick={addOption}>Add Option</button>
            {question.options.map((option, index) => (
              <div key={index}>
                <label>Option {index + 1}:</label>
                <input
                  type="text"
                  value={option.option_text}
                  onChange={(e) => {
                    const updatedOptions = [...question.options];
                    updatedOptions[index].option_text = e.target.value;
                    setQuestion({ ...question, options: updatedOptions });
                  }}
                />
                <label>
                  <input
                    type="checkbox"
                    checked={option.is_correct}
                    onChange={(e) => {
                      const updatedOptions = [...question.options];
                      updatedOptions[index].is_correct = e.target.checked;
                      setQuestion({ ...question, options: updatedOptions });
                    }}
                  />
                  Correct
                </label>
              </div>
            ))}
          </>
        ) : null}

        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default AddQuestion;
