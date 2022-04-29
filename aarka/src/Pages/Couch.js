import React from "react";
import "./Couch.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "../Components/Form";
import Button from "../Components/Button";
import logo5 from "../Sources/logo5.png";

export default function Couch() {
  return (
    <div>
      <div
        className="couchdetails"
        style={{
          height: "630px",
          width: "600px",
          borderRadius: "5px",
          paddingInline: "35px",
        }}
      >
        <h5 style={{ color: "white", textAlign: "center" }}>Couch Details</h5>
        <div style={{ position: "absolute", left: "560px", bottom: "580px" }}>
          <img src={logo5} alt="" width={15} />
        </div>
        <Form />
        <div id="btn1">
          <Button buttonname="Add" />
        </div>
      </div>
    </div>
  );
}
