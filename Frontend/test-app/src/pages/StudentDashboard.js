import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';



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
  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    localStorage.removeItem('user'); // Oops, looks like we had a typo! This should be 'user', not 'z  '
    navigate('/'); // Redirect to the home page
};

// Delete Account function with improved error handling
const handleDeleteAccount = async () => {
    const token = localStorage.getItem('token'); // We only need the token here!
    
    if (!token) {
      console.error('Token not found in localStorage');
      return; // No token? No problem! We just exit the function.
    }

    // Let’s decode the token to get the user ID or get it from the stored user info!
    const decodedToken = jwtDecode(token); // Use this function

    const userId = decodedToken.id; // Assuming your token has the user ID

    // Confirm deletion with the user (because accidental deletions are no fun 😅)
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      try {
        const response = await axios.delete(`http://localhost:8000/api/deleteUser/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`, // Send the token in the header for verification
          },
        });

        if (response.status === 200) {
          alert('Your account has been successfully deleted. 💀');
          handleLogout(); // Poof! Log out the user after deletion
        } else {
          console.error('Failed to delete account:', response.data.message);
          alert('There was an issue deleting your account. 🙁');
        }
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('Oops! Something went wrong while deleting your account. 😬');
      }
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
          <button onClick={handleLogout} style={{ padding: '10px', backgroundColor: '#e74c3c', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Logout
          </button>
        </div>
        <div>
          <button onClick={handleDeleteAccount} style={{ padding: '10px', backgroundColor: '#e74c3c', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Delete Account
          </button>
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