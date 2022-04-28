import React from 'react'
import AddSubAdmin from './Component/AddSubAdmin'
import LeftNav from './Component/LeftNav'
import Pricing from './Page/Pricing'
import TopNav from './Component/TopNav'
import Signin from './Page/Signin'


export default function App() {
  return (
    <div>
     {/* <Signin/> */}
       {/* <AddSubAdmin/> */}
      
      <Pricing/>
      <TopNav/>
      <LeftNav/>
    </div>
  )
}
