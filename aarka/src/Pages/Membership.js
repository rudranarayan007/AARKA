import React from 'react';
import Button from '../Components/Button';
import "./Membership.css";
import logo5 from "../Sources/logo5.png";

export default function Membership() {
  return (
    <div>
        <div className="editbox">
<h4 style={{textAlign:'left'}}>Edit Membership</h4>
<div style={{position:"absolute",left:"650px", bottom:"310px"}}>
<img src={logo5} alt="" width={15}/>
</div>
<hr/>
<form action="">

              <input type="text" id="fname" name="firstname" placeholder="Name" style={{Color:"white", paddingLeft:"17px"}}/> <br/>

              <input type="text" id="lname" name="lastname" placeholder="Description" style={{color:"white", paddingLeft:"17px", paddingBottom:"70px"}}/> <br/>
              </form>

              <div style={{display:"flex"}}>

              <div style={{marginTop:"20px",}}>
              <Button buttonname="Save"/>
              </div>

            <div>
             <button id='btn'>CANCEL</button>
              </div>

              </div>
        </div>
    </div>
  )
}
