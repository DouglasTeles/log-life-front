import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import EditForm from '../Components/EditForm'

function Editar({clearToken}) {
    return (
        <>
             <HeaderNav clearToken={clearToken}/>

             <EditForm clearToken={clearToken} />
        </>
    )
}
export default Editar
