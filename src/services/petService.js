import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

export const getPets = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPet = async (petId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${petId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPet = async (petData) => {
  try {
    const response = await axios.post(BASE_URL, petData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePet = async (petId, petData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${petId}`, petData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePet = async (petId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${petId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};