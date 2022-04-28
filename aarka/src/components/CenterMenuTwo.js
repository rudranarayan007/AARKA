import React from 'react'
import './Centermenutwo.css'

function CenterMenuTwo() {
    return (
        <div>
            <div className='centermenutwo'>
                <div className='innerframe'>
                    <hr className='horizonal' />
                    <img src='./Vector (2).png' className='profile3' />
                    <h5 className='profilename'>Sagarika Mohanty</h5>
                    <img className='phoneimg' src='Vector (10).png'/>
                    <h5 className='phoneno'>Phone Number : +91 9876543214</h5>
                    <img className='emailimg' src='Vector (11).png'/>
                    <h5 className='emailid'>Email ID : sagarika@gmail.com</h5>
                    <img className='dobimg' src='Vector (12).png'/>
                    <h5 className='dobtext'>Date Of Birth : 07.10.1999</h5>
                    <h5 className='amt'>Amount Paid</h5>
                    <h5 className='booked'>BOOKED SLOT : 06.30AM - 08.30AM</h5>
                    <h5 className='date'>DATE : 24th Dec 2020</h5>
                    <h5 className='subscription'>SUBCRIPTION : Gold Membership</h5>
                    <h5 className='totalamt'>TOTAL AMOUNT : ₹ 1300.00</h5>
                    
                    <div className='framerect' src='Rectangle 210.png'>
                     <h1>Gold Member</h1>
                     <ul className='lists'>
                         <li>Best sports curriculum</li>
                         <li>Skill assessment</li>
                         <li>Personalised attention</li>
                         <li>Certified coaches</li>
                         <li>Get complete training & gudience</li>
                     </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CenterMenuTwo