import axios from "axios";
import { BASE_URL } from "../config/config";

export const getTicketsData = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return error;
  }
};
