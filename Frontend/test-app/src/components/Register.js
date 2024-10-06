import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('CSE'); // Default to 'CSE'

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/createUser', {
        email,
        username,
        password,
        name,
        role: 'student', // Default role set to 'student'
        branch,
      });
      console.log(response.data);
      alert('User Created Successfully');
      navigate(`/login`);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email</label>
          <input type="email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Username</label>
          <input type="text" autoComplete='off' value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Branch</label>
          <select value={branch} onChange={(e) => setBranch(e.target.value)} required>
            <option value="CSE">CSE</option>
            <option value="INFT">INFT</option>
            <option value="EXTC">EXTC</option>
            <option value="ECS">ECS</option>
            <option value="AIDS">AIDS</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Chemical">Chemical</option>
            <option value="Automobile">Automobile</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
