// import axios from 'axios';

// const API_URL = 'http://localhost:8000/api'; // Adjust this if your server runs on a different port

// // Login
// export const login = async (credentials) => {
//   try {
//     const response = await axios.post(`${API_URL}/loginUser`, credentials);
//     return response.data;
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error;
//   }
// };

// // Register a new user
// export const register = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, userData);
//     return response.data;
//   } catch (error) {
//     console.error('Registration error:', error);
//     throw error;
//   }
// };

// // Delete a user by ID
// export const deleteUser = async (userId) => {
//   try {
//     const token = localStorage.getItem('token'); // Retrieve token
//     const response = await axios.delete(`${API_URL}/deleteUser/${userId}`, {
//       headers: {
//         'Authorization': `Bearer ${token}` // Include token in headers
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Delete user error:', error);
//     throw error;
//   }
// };


// Get a list of teachers
export const getTeachers = async () => {
  try {
    const response = await axios.get(`${API_URL}/getTeachers`); // Make sure this matches your backend route
    console.log("response.data is ---------",response);
    return response.data; // Ensure the backend returns the correct format (array of teachers)
  } catch (error) {
    console.error('Error fetching teachers:', error);
    throw error;
  }
};

// Add a new teacher
export const addTeacher = async (teacherData) => {
  try {
    const response = await axios.post(`${API_URL}/addTeacher`, teacherData); // Ensure this matches your backend route for adding teachers
    return response.data;
  } catch (error) {
    console.error('Error adding teacher:', error);
    throw error;
  }
};

// Remove a teacher by ID
export const removeTeacher = async (teacherId) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteTeacher/${teacherId}`); // Ensure the backend has a delete route for teachers
    return response.data;
  } catch (error) {
    console.error('Error removing teacher:', error);
    throw error;
  }
};
