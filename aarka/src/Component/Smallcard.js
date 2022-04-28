import React from 'react'
import "./Smallcard.css";
export default function Smallcard(props) {
  return (
    <div className='smallcard'>
  <h4> {props.Title} </h4>
  
  <h3> {props.Price} </h3>
  <div className='yellow'>

  </div>
    </div>
  )
}
