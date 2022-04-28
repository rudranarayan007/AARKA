import { Edit } from "@mui/icons-material";
import React from "react";
import Smallcard from "../Component/Smallcard";
import "./Subadmin.css";
import Stadium from "../Asset/Image/Stadium.png";
export default function Subadmin() {
  return (
    <div>
      <div className="maindiv">
        <div className="title">
          <h2> Sub Admin</h2>
          <div className="edit">
            {" "}
            <Edit style={{ margin: "4px", fontSize: "20" }} />{" "}
          </div>
        </div>
        <div className="namedetails">
          <h2> Arka Sports center</h2> <br />
          <h4>
            {" "}
            OWNER NAME : Sagarika Mohanty
            <br />
            EMAIL ID : sagarika@gmail.com
            <br />
            LOCATION : Patia,bhubneswer{" "}
          </h4>
          <h5>
            {" "}
            MOBILE NUMBER : 7894561235 <br /> PASSWORD : Sagarika@1
          </h5>
        </div>
        <div className="card">
          <Smallcard Title ="Total Users" Price = "1K"/> 
          <Smallcard Title ="Total Subsription" Price = "1K" />
          <Smallcard  Title ="Revenue" Price = "₹50,000" />
          <Smallcard  Title ="Rating" Price = "4.00"/>
          <Smallcard  Title ="Cancel" Price = "50"  />
        </div>
        <div className="stadium">
        <img src = { Stadium } />

        <h3> Aarka Sports Center</h3>
        <h5> Patia,Bhubaneswar   </h5> 
        <h4> ₹ 70,128</h4>
        </div>
     
      </div>
    
    </div>
  );
}
