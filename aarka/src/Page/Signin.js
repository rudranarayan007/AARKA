import React from "react";
import "./Signin.css";
import Backimg from "../Asset/Image/sports-tools_53876-138077 2.png";
import Aarkalogo from "../Asset/Image/aarkalogo.svg";

export default function Signin() {
  return (
    <div className="signincointainer">
      <img src={Backimg} alt=""></img>
      <div className="rectpop">
        <img src={Aarkalogo} alt=""></img>
        <div className="emailid">
          <input type="email" placeholder="Enter email"></input>
        </div>
        <div className="pass">
          <input type="password" placeholder="Password"></input>
        </div>
        <button type="button">Sign in</button>
      </div>
    </div>
  );
}
