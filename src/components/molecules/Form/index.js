import React, { useState } from "react";
import PropTypes from "prop-types";

import geoIcon from "./assets/geo_location.png";
import styles from "./Form.module.scss";

//submitSearch(props form on home)
const Form = ({ submitSearch }) => {
  //set location
  const [location, setLocation] = useState("");

  //submit function
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log({location})
    if (!location || location === "") return;
    submitSearch(location);
  };

  const showPosition = (e) => {
    submitSearch({
      long: e.coords.longitude,
      lat: e.coords.latitude,
    });

    // console.log(e);
  };

  return (
    <form onSubmit={onSubmit}>
      {/* <div className={styles.formGroup}> */}
      <div className="input-group">
        <input
          aria-label="location"
          type="text"
          className={`${styles.input} form-control`}
          placeholder="Search for location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <span className={styles.boxInput}>
          <button
            type="button"
            className={styles.buttonSearch}
            onClick={() => {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
              } else {
                console.log("error");
              }
            }}
          >
            <img src={geoIcon} alt="" className={styles.geoIcon} />
          </button>
        </span>
      </div>

      <button type="submit" className={styles.button} onClick={onSubmit}>
        SEARCH
      </button>
    </form>
  );
};

Form.prototype = {
  submitSearch: PropTypes.func.isRequired,
};

export default Form;
