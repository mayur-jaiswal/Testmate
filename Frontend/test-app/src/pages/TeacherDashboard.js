import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TeacherDashboard.css';
import { FiClipboard, FiUsers, FiFileText, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi';

function TeacherDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <ul className="nav-links">
          <li><Link to="/create-test"><FiClipboard className="icon" /> Create Test</Link></li>
          <li><Link to="/edit-test"><FiFileText className="icon" /> Edit Test</Link></li>
          <li><Link to="/question-bank"><FiBarChart2 className="icon" /> Question Bank</Link></li>
          <li><Link to="/student-performance"><FiUsers className="icon" /> Student Performance</Link></li>
          <li><Link to="/report-generation"><FiSettings className="icon" /> Report Generation</Link></li>
          <li><button onClick={handleLogout} className="logout-button"><FiLogOut className="icon" /> Logout</button></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">  
          <h1>Welcome Back, Teacher!</h1>
          <p>Manage your tests, students, and reports from the dashboard.</p>
        </div>

        {/* Dashboard Stats Cards */}
        <div className="stats-cards">
          <div className="card">
            <h3>Total Tests</h3>
            <p>24</p>
          </div>
          <div className="card">
            <h3>Students Enrolled</h3>  
            <p>350</p>
          </div>
          <div className="card">
            <h3>Pending Evaluations</h3>
            <p>5</p>
          </div>
          <div className="card">
            <h3>Overall Performance</h3>
            <p>78%</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="content">
          <h2>Select an option from the sidebar to get started</h2>
          <p>Stay updated with the latest activities and manage your classes effectively.</p>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
