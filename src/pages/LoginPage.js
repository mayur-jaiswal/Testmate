import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  const handleLoginSuccess = (userData) => {
    // Save user data to local storage or context
    console.log('Login successful', userData);
  };

  return (
    <div>
      <h1>Login</h1>
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default LoginPage;
