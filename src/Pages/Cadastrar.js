import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import Cadastro from '../Components/Cadastro'

function Cadastrar({clearToken, }) {
    return (
        <>
            <HeaderNav clearToken={clearToken}/>
            <Cadastro/>
        </>
    )
}

export default Cadastrar
