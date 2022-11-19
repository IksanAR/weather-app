import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import ForecastCurrent from "../../molecules/ForecastCurrent";
import ForecastDaily from "../../molecules/ForecastDaily";

import styles from "./Forecast.module.css";

const Forecast = ({ forecast, forecastdaily }) => (
  <div className={`${styles.box} container`}>
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <ForecastCurrent forecast={forecast} />
      </div>
      <div className="col-sm-12 col-md-8">
        <ForecastDaily forecastdaily={forecastdaily} />
      </div>
      {/* <Col xs={12} md={4}>
      </Col>
      <Col
        xs={12}
        md={8}
        className="d-flex flex-column justify-content-between"
      >
      </Col> */}
    </div>
    {/* <Row> */}
    {/* </Row> */}
  </div>
  // <Container className={styles.box}>
  // </Container>
);

export default Forecast;
