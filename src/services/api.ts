import axios from 'axios';

const API_BASE_URL = 'https://reqres.in/api';

export const fetchUsers = async (page: number = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserById = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};