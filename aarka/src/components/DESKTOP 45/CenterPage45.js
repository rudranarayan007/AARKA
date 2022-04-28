import React from 'react'
import AddRecord from './AddRecord'
import ReactDOM from 'react-dom'
import './Page45.css'
function CenterPage45() {
  return ReactDOM.createPortal(
    <div className='centerpage45'>
        <div className='insidepage45'>
           <h2 className='pricingggg'>Pricing</h2>
           <hr className='horixontal'/>
           <div className='record'>
             <p className='year'> 12 months</p>
             <p className='rupeees'> ₹25000</p>
           </div>
           <AddRecord/>
           {/* <button className='addrecord'>
             <img className='imageaddrecord' src='./Ellipse 14.png'> 
             </img>
             <img className='addimage' src='./Vector (175).png'/>
           </button> */}
        </div>
    </div>, document.getElementById('modalroot')
  )
}

export default CenterPage45