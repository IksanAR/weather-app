import React from "react";
import "./App.css";

import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );

  //   const apiKey = "3f403e69117ca546dbd33cbf22a2dbb3";
  //   const [weatherData, setWeatherData] = useState([{}]);
  //   const [city, setCity] = useState("");

  //   const getWeather = (event) => {
  //     if (event.key === "Enter") {
  //       fetch(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
  //       ).then((response) =>
  //         response.json().then((data) => {
  //           setWeatherData(data);
  //           setCity("");
  //         })
  //       );
  //     }
  //   };

  //   return (
  //     <div className="container">
  //       <input
  //         type="text"
  //         className="input-city"
  //         placeholder="Enter City.."
  //         onChange={(e) => setCity(e.target.value)}
  //         value={city}
  //         onKeyPress={getWeather}
  //       />

  //       {typeof weatherData.main === "undefined" ? (
  //         <div className="header-title">
  //           <p>
  //             Welcome to Weather app! please enter in a City to get ther weather
  //             of.
  //           </p>
  //         </div>
  //       ) : (
  //         <div className="">
  //           <p>
  //             {weatherData.name}, {weatherData.sys.country}
  //           </p>
  //           <p>{Math.round(weatherData.main.temp)}°F</p>
  //           <p>{weatherData.weather[0].main}</p>
  //           <p>{weatherData.weather[0].description}</p>
  //         </div>
  //       )}
  //     </div>
  //   );
}

export default App;
