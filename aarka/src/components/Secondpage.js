import React from 'react'
import CenterMenuTwo from './CenterMenuTwo'
import LeftMenu from './LeftMenu'
import Navigation from './Navigation'

function Secondpage() {
  return (
    <div>
      {/* <h1>hellooo dreamboy</h1> */}
          <Navigation placeholder='Search Here...'/>
      <LeftMenu/>
      <CenterMenuTwo/>
        
    </div>
  )
}

export default Secondpage