import { Edit } from '@mui/icons-material';
import React from 'react'
import "./Goldcard.css";

export default function Goldcard() {
  return (
    <div>
        <div className='goldcard'>
        <div className='icongold'>
    <Edit  style={{  margin:"4px", fontSize:"20"}}/>
</div>
<h3> Gold Member</h3>

<nav>
<ul>
    <li> • Best sports curriculum</li>
    <li> • Skill assessment</li>
    <li> • Personalised attention</li>
    <li> • Certified coaches</li>
    <li> • Get complete training & gudience</li>
</ul>
</nav>

        </div>

    </div>
  )
}
