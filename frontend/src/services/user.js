import axios from "axios";
import { useEffect, useState } from "react";

// Replace 'your_api_base_url' with the actual base URL of your API
const API_BASE_URL = "http://localhost:3001/api"; // Example base URL

// Function to get user by email
export const getUserByEmail = async (email) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${email}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
