import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Adjust this if your server runs on a different port

// Login
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Delete a user by ID
export const deleteUser = async (userId) => {
  try {
    const token = localStorage.getItem('token'); // Retrieve token
    const response = await axios.delete(`${API_URL}/deleteUser/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}` // Include token in headers
      }
    });
    return response.data;
  } catch (error) {
    console.error('Delete user error:', error);
    throw error;
  }
};

// Get a list of teachers
export const getTeachers = async () => {
  try {
    const response = await axios.get(`${API_URL}/teachers`);
    return response.data;
  } catch (error) {
    console.error('Get teachers error:', error);
    throw error;
  }
};

// Add a new teacher
export const addTeacher = async (teacherName) => {
  try {
    const response = await axios.post(`${API_URL}/teachers`, { name: teacherName });
    return response.data;
  } catch (error) {
    console.error('Add teacher error:', error);
    throw error;
  }
};

// Remove a teacher by ID
export const removeTeacher = async (teacherId) => {
  try {
    const response = await axios.delete(`${API_URL}/teachers/${teacherId}`);
    return response.data;
  } catch (error) {
    console.error('Remove teacher error:', error);
    throw error;
  }
};
