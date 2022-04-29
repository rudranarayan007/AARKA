import React from 'react'
import LeftMenu from '../components/LeftMenu'
import Navigation from '../components/Navigation'
import CenterPage45 from '../components/CenterPage45'

// C:\Users\HARI\Documents\GitHub\Aarka\aarka\src\components\CenterPage45.js

// import MultipleSelect from '../components/DESKTOP 45/MultipleSelect'

function Page45() {
  return (
    <div >
      <div>
        <Navigation placeholder='Search Here...' />
        <LeftMenu />
        <CenterPage45 />
      </div>

      {/* <div className='addpackage'>
        <h1 className='textaddpackage'>Add Package</h1>

        <div className='multipleselect'>  <MultipleSelect /></div>
      </div> */}

    </div>
  )
}

export default Page45