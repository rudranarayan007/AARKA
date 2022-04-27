import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "./Desktop109.css";

export default function Desktop109() {
  return (
    <Container>
      <h1>Add Services & Specifications</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Service Name</Form.Label> */}
          <Form.Control type="text" placeholder="Service Name" />
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          {/* <Form.Label>Upload Images</Form.Label> */}
          <Form.Control type="file" multiple />
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label htmlFor="timeSelect">Time Select</Form.Label> */}
          <Form.Select id="TimeSelect">
            <option>Select Time</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Per Hour</Form.Label> */}
          <Form.Control type="text" placeholder="Per Hour" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Per Day</Form.Label> */}
          <Form.Control type="text" placeholder="Per Day" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Price</Form.Label> */}
          <Form.Control type="text" placeholder="Price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Description</Form.Label> */}
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Add Facilities</Form.Label>
          <Form.Control type="text" placeholder="Add Facilities" />
          <Button className="class9">+</Button>
        </Form.Group> */}
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add Facilities"
            aria-label="Add Facilities"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-primary" id="button-addon2">
            +
          </Button>
        </InputGroup>
        <Button className="class10">Cancel</Button>
        <Button className="class11">Add</Button>
      </Form>
    </Container>
  );
}
