import React from "react";
import { Error, Forecast, Form, Header, Loader } from "../../components";
import useForecast from "../../hooks/useForecast";

import styles from "./Home.module.css";

const Home = () => {
  //return from hooks
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (value) => {
    //call fn
    submitRequest({ value });
  };

  return (
    <>
      {/* header */}
      <Header />
      <div className={styles.box}>
        {/* form */}
        {!isLoading && <Form submitSearch={onSubmit} />}
        {/* error */}
        {isError && <Error message={isError} />}
        {/* loader */}
        {isLoading && <Loader />}
      </div>
      {/* forecast */}
      {forecast && <Forecast />}
    </>
  );
};

export default Home;
