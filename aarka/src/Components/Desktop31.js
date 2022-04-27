import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Desktop31.css";

export default function Desktop31() {
  return (
    <Container fluid="md">
      <Row className="class1">
        <Col>Pricing</Col>
      </Row>
      <Row className="class2">
        <Col className="class3">Pricing</Col>
        <Col md="auto" className="class4">
          Rs.25,000
        </Col>
        <Col xs lg="2" className="class5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </Col>
      </Row>
      <Row className="class6">
        <Col className="class7"><Button className="class8"><h3>+</h3></Button></Col>
      </Row>
    </Container>
  );
}
