import React from 'react'
import LeftMenu from '../LeftMenu'
import Navigation from '../Navigation'
import CenterPage45 from './CenterPage45'
import MultipleSelect from './MultipleSelect'

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