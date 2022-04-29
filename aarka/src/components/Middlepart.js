import React from 'react'
import '../Page/Page26.css'

function Middlepart(props) {
  return (
    <div className='middlepart'>
        <div className='insidepart'>
            <p className='show'>Show</p>
            <div className='upperlower'>
                <p className='insideupperlower'>10</p>
                <img className='upperkey' src='./Vector (16).png'/>
                <img className='lowerkey' src='./Vector (15).png'/>
            </div>
            <p className='entriesss'>entries</p>
            <p className='searrrrch'>search:</p>
            <input className='inputttt' />
            {/* <div></div> */}
                <h3 className='header' >{props.subadmin}</h3>
                <hr className='horixontal'/>
                <p className='sknumber' style={{ left: "23px"}}>SL.NO</p>
                <p className='sknumber' style={{ left: "160px"}}>USER NAME</p>
                <p className='sknumber' style={{ left: "343px"}}>MOBILE NUMBER</p>
                <p className='sknumber' style={{ left: "569px"}}>EMAIL ID</p>
                <p className='sknumber' style={{ left: "732px"}}>D.O.B</p>
                <p className='sknumber' style={{ left: "881px"}}>DATE</p>

                <div className='users' style={{top: "183px"}}>
                     <p style={{position: "absolute",left: "20px"}}>1</p>
                     <p style={{position: "absolute",left: "127px"}}>Sagarika Mohanty</p>
                     <p style={{position: "absolute",left: "325px"}}>+91 9876543214</p>
                     <p style={{position: "absolute",left: "516px"}}>sagarika@gmail.com</p>
                     <p style={{position: "absolute",left: "701px"}}>07.10.1999</p>
                     <p style={{position: "absolute",left: "842px"}}>10.02.2020</p>
                </div>
                <div className='users' style={{top: "271px"}}>
                <p style={{position: "absolute",left: "20px"}}>2</p>
                     <p style={{position: "absolute",left: "127px"}}>Sagarika Mohanty</p>
                     <p style={{position: "absolute",left: "325px"}}>+91 9876543214</p>
                     <p style={{position: "absolute",left: "516px"}}>sagarika@gmail.com</p>
                     <p style={{position: "absolute",left: "701px"}}>07.10.1999</p>
                     <p style={{position: "absolute",left: "842px"}}>10.02.2020</p>
                </div>
                <div className='users'style={{top: "356px"}}>
                <p style={{position: "absolute",left: "20px"}}>3</p>
                     <p style={{position: "absolute",left: "127px"}}>Sagarika Mohanty</p>
                     <p style={{position: "absolute",left: "325px"}}>+91 9876543214</p>
                     <p style={{position: "absolute",left: "516px"}}>sagarika@gmail.com</p>
                     <p style={{position: "absolute",left: "701px"}}>07.10.1999</p>
                     <p style={{position: "absolute",left: "842px"}}>10.02.2020</p>
                </div>
                <div className='users' style={{top: "441px"}}>
                <p style={{position: "absolute",left: "20px"}}>4</p>
                     <p style={{position: "absolute",left: "127px"}}>Sagarika Mohanty</p>
                     <p style={{position: "absolute",left: "325px"}}>+91 9876543214</p>
                     <p style={{position: "absolute",left: "516px"}}>sagarika@gmail.com</p>
                     <p style={{position: "absolute",left: "701px"}}>07.10.1999</p>
                     <p style={{position: "absolute",left: "842px"}}>10.02.2020</p>
                </div>
                
              
        </div>
    </div>
  )
}

export default Middlepart