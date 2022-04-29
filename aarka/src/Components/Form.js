import React from 'react';
import "./Form.css"

export default function Form() {
  return (
    <div>
<form action="/action_page.php">
              <label htmlFor="fname">Name</label> <br/>
              <input type="text" id="fname" name="firstname" placeholder=""/> <br/>
          
              <label  htmlFor="lname">Designation</label> <br/>
              <input type="text" id="lname" name="lastname" placeholder=""/> <br/>
          
              <label  htmlFor="subject">Description</label> <br/>
              <textarea id="subject" name="subject" placeholder="" style={{height:"70px", marginTop:"10px"}}></textarea> <br/>

              <label  htmlFor="lname" style={{marginBlock:"15px"}}>Select photo</label> <br/>
              <input type="text" id="lname" name="lastname" style={{width:"210px", borderRadius:"32px" , paddingLeft:"20px",fontSize:"14px"}} placeholder="Choose photo"/> <br/>

              <label  htmlFor="lname">Available time</label> <br/>

              <div style={{display:"flex"}}>

                <div >
              <input type="text" id="lname" name="lastname" style={{width:"260px", paddingLeft:"20px"}} placeholder="Start"/>
              </div>
              <div style={{marginLeft:"10px"}}>
              <input type="text" id="lname" name="lastname" style={{width:"260px", paddingLeft:"20px",}} placeholder="End"/> <br/>
              </div>

              </div>
            </form>
    </div>
  )
}
