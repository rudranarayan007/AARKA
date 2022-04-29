import React from 'react'
// import Middlepart from '../DESKTOP 26/Middlepart'
// import LeftMenu from '../LeftMenu'
// import Navigation from '../Navigation'
import '../Page/Page26.css'

import Middlepart from '../components/Middlepart'
import LeftMenu from '../components/LeftMenu'
import Navigation from '../components/Navigation'

function Page27() {
  return (
    <div>
         <Navigation placeholder='Search Here...' />
            <LeftMenu/>

            <Middlepart subadmin="Sub Admin"/>
            <button className='buttonnn'> ADD SUB ADMIN</button>
    </div>
  )
}

export default Page27