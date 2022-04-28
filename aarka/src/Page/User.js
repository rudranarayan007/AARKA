import React from "react";
import "./User.css";
import Vector from "../Asset/Image/Vector.png";
import Goldcard from "../Component/Goldcard";
import { CalendarMonth, Email, PhoneAndroid } from "@mui/icons-material";
export default function User() {
  return (
    <div>
      <div className="user">
        <div className="placeholder">
          <Goldcard />
        </div>

        <div className="profilepic">
          {" "}
          <img src={Vector} />{" "}
        </div>

        <div className="name">
          <h1> Sagarika Mohanty</h1>
          <div className="detail">
            <h5>
              {" "}
              <PhoneAndroid />  Phone Number : +91 9876543214
            </h5>
            <h5>
              {" "}
              <Email /> Email ID : sagarika@gmail.com
            </h5>
            <h5>
              {" "}
              <CalendarMonth /> Date Of Birth : 07.10.1999
            </h5>
          </div>
        </div>
        <div className="paymentinfo">
          <h2> Amount Paid </h2>
          <div className="paymentdetails">
          <h6> BOOKED SLOT : 06.30AM - 08.30AM</h6> <br/> <br/>
          <h6> DATE : 24th Dec 2020</h6> <br/><br/>
          <h6> SUBCRIPTION : Gold Membership</h6> <br/><br/>
          <h6> TOTAL AMOUNT : ₹ 1300.00</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
