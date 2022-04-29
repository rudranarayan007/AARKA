import React from 'react'
import { useState } from "react"
// import { useState } from 'react/cjs/react.production.min'
import './Navigation.css'
function Navigation() {
  const [state, setstate]= useState('')
  return (
    <div className='navbar'>
        <input value={state} onChange={e => setstate(e.target.value)} placeholder='Search Here' className='search'></input>
        <img src='../asset/image/Vector.png' className='notification'/>
        <img src='../asset/image/Ellipse 14.png' className='ellipse'/>
        <img src='../asset/image/12.png' className='twelve'/>
        <img src='../asset/image/Vector (2).png' className='profile2'/>
        <img src='../asset/image/Vector (1).png' className='profile'/>

    </div>
  )
}

export default Navigation