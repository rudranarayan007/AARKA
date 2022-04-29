import { Clear } from "@mui/icons-material";
import React from "react";
import "./Desktoppop.css";

export default function Desktoppop() {
  return (
    <div>
      <div className="red">
        <h4>Time Slots</h4>

        <select className="selectone">
          <option disabled selected>
            {" "}
            Start Time
          </option>
          <option> 7.00 AM</option>
          <option> 8.00 AM</option>
          <option> 9.00 AM</option>
          <option> 10.00 AM</option>
          <option> 11.00 AM</option>
        </select>

        <select className="selecttwo">
          <option disabled selected>
            {" "}
            End Time{" "}
          </option>
          <option> 3.00 PM</option>
          <option> 4.00 PM</option>
          <option> 5.00 PM</option>
          <option> 60.00 PM</option>
          <option> 7.00 PM</option>
        </select>

        <Clear style={{ color: "white", background: "transparent" }} />
        <input type="checkbox"></input> 
        <p>Trainer Available</p>
      </div>

      <button className="btn"> ADD </button>
    </div>
  );
}