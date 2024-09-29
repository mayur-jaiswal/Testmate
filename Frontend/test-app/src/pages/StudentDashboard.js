import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();

  const handleCategoryClick = async (category) => {
    try {
      console.log("button clicked of type");
      console.log(document.cookie);


      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const response = await fetch(`http://localhost:8000/api/getTests?type=${category}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Attach the token to the request
          },  
        });
      const data = await response.json();
      console.log(data);

      if (response.ok) {  
        // Navigate to the new page and pass the fetched tests as state
        navigate(`/tests/${category.toLowerCase()}`, { state: { tests: data } });
      } else {
        console.error('Failed to fetch tests:', data.message);
      }
    } catch (error) {
      console.error('Error fetching tests:', error);
    }
  };  

  return (
    <div className="student-dashboard" style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div className="sidebar" style={{ width: '20vw', backgroundColor: '#f4f4f4', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <p>Branch: Computer Science</p>
          <li><a href="#noticeboard">Noticeboard</a></li>
          <li><a href="#user-manual">User Manual</a></li>
          <button style={{ padding: '10px', backgroundColor: '#e74c3c', color: '#fff', border: 'none', cursor: 'pointer' }}>Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ flex: 5, padding: '20px' }}>
        <h1>Test Categories</h1>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {['GATE_PYQ', 'MOCK_TEST', 'CUSTOM_TEST', 'CHAPTER_WISE', 'SUBJECT_WISE'].map(category => (
            <div key={category} onClick={() => handleCategoryClick(category)} style={{ width: '200px', height: '100px', backgroundColor: '#3498db', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', cursor: 'pointer' }}>
              {category.replace('_', ' ')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
