import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./Forecast.module.css";

const Forecast = ({ forecast }) => (
  <Container className={styles.box}>
    <Row>
      <Col xs={12} md={4}>
        <div className={styles.card}>{forecast.name}</div>
        <img
          src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
          alt=""
        />
        <p className="text-center fw-bolder">
          {Math.round(forecast.main.temp)}
        </p>
        <p className="text-center fw-bolder">{forecast.weather[0].main}</p>
      </Col>
      <Col
        xs={12}
        md={8}
        className="d-flex flex-column justify-content-between"
      ></Col>
    </Row>
  </Container>
);

export default Forecast;
