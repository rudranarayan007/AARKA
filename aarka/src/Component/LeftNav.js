import React from "react";
import './LeftNav.css'
import aarkaimg from '../Asset/Image/aarkalogo.svg'
import { AccountBox, Home, LocalOffer, Person } from "@mui/icons-material";

export default function LeftNav() {
  return (
    <div className="leftnavcointainer">
        <div className="aarkalogo">
            <img src={aarkaimg} alt=''></img>
        </div>
        <div className="deshbord">
            <div className="homeicon">
                <Home/>
            </div>
            <div className="deshbordtxt">Dashboard</div>
        </div>

       

        <div className="user">
            <div className="usericon">
                <Person/>
            </div>
            <div className="usertxt">Users</div>
           
        </div>

        <div className="subadmin">
            <div className="subadminicon">
                <AccountBox/>
            </div>
            <div className="subadmintxt">Sub Admin</div>
        
        </div>

        <div className="price">
            <div className="priceicon">
                <LocalOffer/>
            </div>
            <div className="pricetxt">Price</div>
           
        </div>

      
    </div>
  );
}
