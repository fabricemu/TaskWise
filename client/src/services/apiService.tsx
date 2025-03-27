import axios from "axios";

const API_URL = 'http://localhost:5000'

// Authentication APIs
export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/signup`, userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

// Task APIs
export const getTasks = async (userId) => {
  const response = await axios.get(`${API_URL}/api/tasks/${userId}`);
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axios.post(`${API_URL}/api/tasks`, taskData);
  return response.data;
};

export const updateTask = async (taskId, updatedData) => {
  const response = await axios.put(`${API_URL}/api/tasks/${taskId}`, updatedData);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_URL}/api/tasks/${taskId}`);
  return response.data;
};
