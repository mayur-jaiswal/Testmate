import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {    
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/loginUser', { email, password });
      console.log(response.data.user.email);

      if (response.data.user.role ==='teacher') {
        // Store the token in localStorage
        console.log(response.data.user.email);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user_id', response.data.user.email);
        console.log(localStorage.getItem('user_id'));
        // Redirect to the home page or dashboard
        navigate('/teacher-dashboard');   
      } else {
        navigate('/student-dashboard');
        localStorage.setItem('user_id', response.data.user.email);
        console.log(localStorage.getItem('user_id'));
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default Login;