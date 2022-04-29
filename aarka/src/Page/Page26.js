import React from 'react'
import LeftMenu from '../components/LeftMenu'
import Navigation from '../components/Navigation'
import Middlepart from '../components/Middlepart'

function Page26() {
    return (
        <div>
            <Navigation placeholder='Search Here...' />
            <LeftMenu/>
            <Middlepart subadmin="User List"/>
        </div>
    )
}

export default Page26