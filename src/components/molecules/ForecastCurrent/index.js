import React from "react";
import dayjs from "dayjs";
import styles from "./ForecastCurrent.module.scss";
import locationIcon from "./assets/location-pin.png";

const ForecastCurrent = ({ forecast }) => {
  // console.log(forecast);
  const Day = dayjs().format("dddd");
  const Date = dayjs().format("DD MMM YYYY  ");
  const { name, main, weather } = forecast;
  return (
    <div className="d-flex">
      {/* <div className={styles.img}></div> */}
      {/* <div className={styles.gradient}></div> */}
      <div
        className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}
      >
        <div>
          <h2 className="font-weight-bold mb-1">{Day}</h2>
          <p className="mb-0">{Date}</p>
          <p className="d-flex align-items-baseline font-weight-lighter mb-1">
            <img
              width="10"
              height="15"
              src={locationIcon}
              className="mr-1"
              alt="location pin icon"
            />
            <span>{name}</span>
          </p>
        </div>
        <div>
          {/* <img width="45" src={weatherIcon} alt="" /> */}
          {/* <p>Image Weather</p> */}
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt=""
          />
          <h2 className="font-weight-bold mb-1">
            <span>{Math.round(main.temp)}</span>°C
          </h2>
          <h5 className="font-weight-lighter">{weather[0].description}</h5>
        </div>
      </div>
    </div>
  );
};

export default ForecastCurrent;
