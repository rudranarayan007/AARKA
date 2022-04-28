import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Leftmenu.css'
// import LeftOptions from './LeftOptions'
import Logo from './Logo'

function LeftMenu() {
  const toUppercase=(name)=>{
           const Name= name;
          const  uppercase= Name.toUppercase();
            return uppercase;
  }
  // const navigate= useNavigate();
  // const buttonclicked=()=>{
  //   navigate('/dashboard')
  // };
  // const buttonclickedtwo=()=>{
  //   navigate('/users')
  // };
  // const buttonclickedthree=()=>{
  //   navigate('/price')
  // };
  return (
    <div className='leftmenu'>
      <Logo />
      {/* <div className='menu' > */}
      <div className='dashboargtext' style={{ color: 'rgb(245 245 245)', top: "135px" }}>
          <img src='Subtract (1).png' className='homebutton' />
        <button /*onClick={buttonclicked}*/ className='buttonmenu'>
          <h5 className='textmenuuuu' style={{margin: "21px"}}>Dashboard</h5>
        </button>

      </div>
      <div className='dashboargtext' style={{ color: 'rgb(245 245 245)', top: "208px" }}>
        <img src='vector (3).png' className='homebutton' />
        <button /*onClick={buttonclickedtwo}*/ className='buttonmenu'>
          <h5  className='textmenuuuu'>Users</h5>
        </button>
      </div>
      <div className='dashboargtext' style={{ color: 'rgb(245 245 245)', top: "281px" }}>
        <img src='vector (4).png' className='homebutton' />
        <h5 style={{marginTop:"20px"}}>Sub Admin</h5>
      </div>
      <div className='dashboargtext' style={{ color: 'rgb(245 245 245)', top: "356px" }}>
        <img src='vector (5).png' className='homebutton' />
        <button /*onClick={buttonclickedthree}*/ className='buttonmenu'>
          <h5  className='textmenuuuu'>Pricing</h5>
        </button>
      </div>
      {/* </div> */}
    </div>
  )
}

export default LeftMenu