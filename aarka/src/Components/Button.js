import React from 'react';
import "./Button.css"

export default function Button(props) {
  return (
    <div>
         <button>{props.buttonname}</button>
    </div>
  )
}
