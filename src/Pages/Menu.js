import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import Main from '../Components/Main'

function Menu({clearToken}) {
    return (
        <>
        <HeaderNav clearToken={clearToken}/>
        <Main/>
        </>
    )
}

export default Menu
