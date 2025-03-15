import axios from "axios";

const BASE_URL = "http://3.109.213.200:8080";


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getWeatherForecast = async () => {
  try {
    const response = await api.get("/WeatherForecast");
    return response.data; 
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error; 
  }
};

