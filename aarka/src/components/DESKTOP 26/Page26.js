import React from 'react'
import LeftMenu from '../LeftMenu'
import Navigation from '../Navigation'
import Middlepart from './Middlepart'

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