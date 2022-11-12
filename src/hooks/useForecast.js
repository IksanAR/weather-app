import { useState } from "react";
import axios from "axios";

// const apiKey = "3f403e69117ca546dbd33cbf22a2dbb3";
// const BASE_URL = "https://www.metaweather.com/api/location";
// const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
// const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  // console.log("halo i am hook");
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setforecast] = useState(null);

  //call the api
  const submitRequest = async (location) => {
    // const { data } = await axios(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${apiKey}`
    // );
    // console.log({ data });
    // const { data } = await axios(`${REQUEST_URL}/search`, {
    //   params: { query: location },
    // });
    // console.log({ data });
    // if (!data || data.length === 0) {
    //   setError("There is no such location");
    //   setLoading(false);
    //   return;
    // }
    // return data[0];
    // try {
    //   const data = await axios.get(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${apiKey}`
    //   );
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
    // axios.get
    // fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
    // ).then((response) =>
    //   response.json().then((data) => {
    //     setWeatherData(data);
    //     setCity("");
    //   })
    // );
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
