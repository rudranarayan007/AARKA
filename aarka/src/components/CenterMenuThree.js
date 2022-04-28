import React from 'react'
import './CenterMenuthree.css'
function CenterMenuThree() {
    return (

        <div>
            <div className='centermenutwo'>
                <div className='innerframe'>
                    <h5 className='pricing'>Pricing</h5>
                    <hr className='horizonal' />


                    <div className='framerect2' src='Rectangle 210.png'>
                        <h1>Gold Member</h1>
                        <img className='rectangleedit' src='Rectangle 70.png'/>
                        <img className='edit' src='Vector (14).png'/>
                        
                        <ul className='lists'>
                            <li>Best sports curriculum</li>
                            <li>Skill assessment</li>
                            <li>Personalised attention</li>
                            <li>Certified coaches</li>
                            <li>Get complete training & gudience</li>
                        </ul>
                    </div>

                    <div className='framerect2silver' src='Rectangle 210.png'>
                        <h1>Silver Member</h1>
                        <img className='rectangleedit' src='Rectangle 70.png'/>
                        <img className='edit' src='Vector (14).png'/>

                        <ul className='lists'>
                            <li>Unlimited access</li>
                            <li>Play any time & any center</li>
                            <li>Get slot priority</li>
                            <li>Multi sports access</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CenterMenuThree