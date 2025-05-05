// src/api/api.jsx
import axios from 'axios';

export const fetchCountries = async () => {
  try {
    const response = await axios.get('https://xcountries-backend.azurewebsites.net/all');
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};
