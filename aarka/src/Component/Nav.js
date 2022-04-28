import React from "react";
import "./Nav.css";
import Logo from "../Asset/Image/Logo.png";
import {AccountBox, AccountCircle, Home, LocalOffer, NotificationsActive,Person,  Search,} from "@mui/icons-material";

export default function Nav() {
  return (
    <div>
      <div className="sidebar">
        <div className="logo">
          <img src={Logo} />
        </div>

        <div className="Home">
          {" "}
          <Home /> <h2>Dashboard</h2>{" "}
        </div>
        <div className="Person">
          {" "}
          <Person /> <h2>User</h2>{" "}
        </div>
        <div className="Account">
          {" "}
          <AccountBox />{" "}
          
            {" "}
            <h2>Sub Admin</h2>{" "}
          
        </div>
        <div className="Local">
          {" "}
          <LocalOffer /> <h2>Price</h2>{" "}
        </div>
      </div>
      <div className="nav">
        <div className="search">
          <Search style={{color: "white", left: "140px", top:"10px", position: "relative",}} />
          {/* <input type="text" placeholder="Search Here...." /> */}
        </div>
        <div className="iconstop">
          <NotificationsActive style={{ color: "yellow" }} />
          <AccountCircle style={{ color: "white", gap: "10px" }} />
        </div>
      </div>
    </div>
  );
}
