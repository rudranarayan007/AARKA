import React from 'react'
import CenterMenuThree from './CenterMenuThree'
import CenterMenuTwo from './CenterMenuTwo'
import LeftMenu from './LeftMenu'
import Navigation from './Navigation'

function Thirdpage() {
  return (
    <div>
      {/* <h1>hellooo sibashsi</h1> */}

        <Navigation placeholder='Search Here...'/>
      <LeftMenu/>
      <CenterMenuThree/>

    </div>
  )
}

export default Thirdpage