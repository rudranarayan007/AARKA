import React from "react";
import Button from "../Components/Button";
import "./Facilities.css";
import logo from "../Sources/logo.png"
import logo2 from "../Sources/logo2.png"
import logo3 from "../Sources/logo3.png"
import logo4 from "../Sources/logo4.png"
import logo5 from "../Sources/logo5.png"
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';


export default function Facilities() {
      
  return (
    <div>
      <div className="selectbox">
        <h4>Select Facilities</h4>
        <div style={{position:"absolute",left:"540px", bottom:"510px"}}>
<img src={logo5} alt="" width={15}/>
</div>
        <div
          style={{
            display: "flex",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "18px",
            letterSpacing: "0.08em",
            color: "#D6D2D2",
            listStyleType:"none",
            justifyContent:"space-around"
          }}
        >
          <div className="select">
            <ul style={{listStyleType:"none"}}>
              <li className="select__item"> <img src={logo2} alt="" width={20} style={{marginRight:"10px"}}/>CCTV</li>
              <li><ChairOutlinedIcon style={{marginRight:"10px"}}/>Sitting Area</li>
              <li> <img src={logo2} width={20} alt="" style={{marginRight:"10px"}}/>CCTV</li>
              <li><ChairOutlinedIcon style={{marginRight:"10px"}}/> Sitting Area</li>
              <li> <img src={logo2} width={20} alt="" style={{marginRight:"10px"}}/>CCTV</li>
              <li className="select__item"><ChairOutlinedIcon style={{marginRight:"10px"}}/> Sitting Area</li>
              <li> <img src={logo2} width={20} alt="" style={{marginRight:"10px"}}/>CCTV</li>
              <li><ChairOutlinedIcon style={{marginRight:"10px"}}/> Sitting Area</li>
            </ul>
          </div>

          <div>
            <ul style={{listStyleType:"none"}}>
              <li className="select__item"> <LocalParkingOutlinedIcon style={{marginRight:"10px", width:"20px"}}/> Parking</li>
              <li><img src={logo} alt="" width={20} style={{marginRight:"10px"}}/> Drinking Water</li>
              <li className="select__item"> <LocalParkingOutlinedIcon style={{marginRight:"10px", width:"20px"}}/> Parking</li>
              <li><img src={logo} alt="" width={20} style={{marginRight:"10px"}}/> Drinking Water</li>
              <li className="select__item"> <LocalParkingOutlinedIcon style={{marginRight:"10px", width:"20px"}}/> Parking</li>
              <li><img src={logo} alt="" width={20} style={{marginRight:"10px"}}></img>Drinking Water</li>
              <li><LocalParkingOutlinedIcon style={{marginRight:"10px", width:"20px"}}/> Parking</li>
              <li><img src={logo} alt="" width={20} style={{marginRight:"10px"}}></img>Drinking Water</li>
            </ul>
          </div>

          <div>
            <ul style={{listStyleType:"none"}}>
              <li><img src={logo3} alt="" width={23} style={{marginRight:"10px"}}/> Locker Room</li>
              <li><img src={logo4} alt="" width={23} style={{marginRight:"10px"}}/> Wash Room</li>
              <li><img src={logo3} alt="" width={23} style={{marginRight:"10px"}}/> Locker Room</li>
              <li><img src={logo4} alt="" width={23} style={{marginRight:"10px"}}/> Wash Room</li>
              <li className="select__item"><img src={logo3} alt="" width={20} style={{marginRight:"10px"}}/> Locker Room</li>
              <li><img src={logo4} alt="" width={23} style={{marginRight:"10px"}}/> Wash Room</li>
              <li><img src={logo3} alt="" width={23} style={{marginRight:"10px"}}/> Locker Room</li>
              <li><img src={logo4} alt="" width={23} style={{marginRight:"10px"}}/> Wash Room</li>
            </ul>
          </div>
        </div>

<div>
          <Button buttonname="ADD" />
          </div>
       
      </div>
    </div>
  );
}
