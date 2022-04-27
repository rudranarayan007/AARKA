import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

export default function Desktop107() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
