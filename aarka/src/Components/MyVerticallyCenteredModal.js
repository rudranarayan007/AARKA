import React from "react";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";
import "./MyVerticallyCenteredModal.css";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>Add Services & Specifications</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Game Facilities</h4>
        <ul>
          <li>Grass Ground</li>
        </ul>
        <Button className="class12">Add More+</Button>
      </Modal.Body>
      <Modal.Body>
        <h4>Services</h4>
        <ul>
          <li>
            <InputGroup className="mb-3">
              <FormControl aria-label="" value="Net Praxite" />
              <FormControl aria-label="" value="Rs20/hr" />
              <FormControl aria-label="" value="Rs200/day" />
            </InputGroup>
          </li>
          <li>
            <InputGroup className="mb-3">
              <FormControl aria-label="" value="Night Light"/>
              <FormControl aria-label="" value="Rs20/hr" />
              <FormControl aria-label="" value="Rs200/day" />
            </InputGroup>
          </li>
        </ul>
        <Button className="class12">Add New Services</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
