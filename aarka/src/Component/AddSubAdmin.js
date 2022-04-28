import { Close } from "@mui/icons-material";
import { Button, Modal } from "react-bootstrap";


import "./AddSubAdmin.css";

export default function AddSubAdmin() {
  
  return (
    <>
      <Modal.Dialog className="modalboxs" size="xl" >
        

        <Modal.Body className="modalbody">
         
            <div className="cointainer">
              <div className="addsubadmincontainer">
                <div className="addsubadmintxt">Add Sub Admin</div>
                <div className="line"></div>
                <div className="sportscenter">
                  <input
                    type="text"
                    placeholder="ENTER SPORTS CENTER NAME"
                  ></input>
                </div>

                <div className="mobileno">
                  <input type="text" placeholder="ENTER MOBILE NUMBER"></input>
                </div>

                <div className="passwordtxt">
                  <input type="password" placeholder="ENTER PASSWORD"></input>
                </div>

                <div className="ownernametxt">
                  <input type="text" placeholder="ENTER OWNER NAME"></input>
                </div>

                <div className="emailtxt">
                  <input type="email" placeholder="ENTER EMAIL ID"></input>
                </div>

                <div className="conformpassword">
                  <input
                    type="password"
                    placeholder="ENTER CONFIRM PASSWORD"
                  ></input>
                </div>
                <div className="but1">
                  <button type="button">ADD </button>
                </div>

                <div className="but2">
                  <button type="button">CANCEL</button>
                </div>
                <div className="closeicon">
                  <Close />
                </div>
              </div>
            </div>
         
        </Modal.Body>

       
      </Modal.Dialog>
    </>
  );
}

