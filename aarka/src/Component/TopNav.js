import { NotificationsNoneOutlined, Search } from "@mui/icons-material";
import React from "react";
import "./Topnav.css";
import profile from "../Asset/Image/profile.svg";

export default function TopNav() {
  return (
    <div className="topnavcointainer">
      <div className="search">
        <input type="text" placeholder="Search Here..."></input>
      </div>
      <div className="searchlogo">
        <Search />
      </div>

      <div className="bellicon">
        <NotificationsNoneOutlined fontSize="large" />
      </div>
      <div className="number12">12</div>
      <div className="profilelogo">
        <img src={profile} alt=""></img>
      </div>
    </div>
  );
}
