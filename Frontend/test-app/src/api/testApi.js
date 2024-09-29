import axios from 'axios';

const API_URL = 'http://your-backend-url';

export const getAllTests = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAllTests`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTestById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/getTestById/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTest = async (test) => {
  try {
    const response = await axios.post(`${API_URL}/createTest`, test);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Other API functions...
