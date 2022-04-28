import React from 'react'
import CenterMenu from './CenterMenu'
import LeftMenu from './LeftMenu'
import Navigation from './Navigation'

function Firstpage() {
  return (
    <div>
      {/* <Logo/> */}

{/* <h1>hellooo</h1> */}

           <Navigation placeholder='Search Here...'/>
      <LeftMenu/>
      <CenterMenu/>  
    </div>
  )
}

export default Firstpage