import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import dayjs from "dayjs";
import styles from "./ForecastDaily.module.scss";
// import locationIcon from "./assets/location-pin.png";

const forecastdaily = ({ forecastdaily }) => {
  console.log(forecastdaily);

  // const { city, list } = forecastdaily;

  return (
    <div className="col-12">
      <div className="row dailyCurrent">
        {forecastdaily.list.map((item, index) => {
          return (
            <div className="col-sm-3 mb-2" key={index}>
              <div className={styles.cardDaily}>
                <p>{dayjs(item.dt_txt).format("HH:mm")}</p>
                <img
                  loading="lazy"
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt={item.weather[0].description}
                />
                <p>
                  <span>{Math.round(item.main.temp)}</span>°C
                </p>
                <p>{item.weather[0].description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // <div className="">
    //   <h2>Date Time</h2>
    //   <p>Temperature</p>
    //   <p>ICon Weather</p>
    //   <p>Description</p>
    // </div>
  );
};

export default forecastdaily;
