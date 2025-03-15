import { useEffect, useState } from "react";
import { getWeatherForecast } from "../services/apiurl.js"; 
import { Card } from "antd"; 
import { Sun, Thermometer, Calendar } from "lucide-react"; 
import "./App.css"; // Import CSS file

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getWeatherForecast();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="container">
      {/* Centered Title */}
      <h1 className="title">Weather Forecast</h1> 

      <div className="card-grid">
        {weatherData.map((item, index) => (
          <Card key={index} bordered={true} className="weather-card" title={
            <div className="card-title">
              <Sun className="icon sun-icon" /> {item.summary}
            </div>
          }>
            <p className="card-text">
              <Calendar className="icon calendar-icon" /> {item.date}
            </p>
            <p className="card-text">
              <Thermometer className="icon temp-icon" /> {item.temperatureC}°C | {item.temperatureF}°F
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
