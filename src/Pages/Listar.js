import React, { useEffect, useState } from 'react'
import HeaderNav from '../Components/HeaderNav'
import ListClient from '../Components/ListClient'
import api from '../services/api'

function Listar({clearToken}) {
    const [token] = useState(localStorage.getItem('token'))
    const [allClients, setAllClients ] = useState(null)
  

    useEffect(() =>{
        async function getClients(){
            try {
                const loadedClients = await api.get('clientes',{
                    headers:{
                        token:token
                    }
                })

                const {data} = loadedClients

                setAllClients(data)
    
            } catch (error) {
              alert("Não foi possivel buscar os clientes")  
            }
        }
        getClients()
    },[])
    
   
       
   



    return (
        <>
             <HeaderNav clearToken={clearToken}/>
             {allClients === null && <h1>Carregando...</h1>}
             {allClients === undefined && <h1>Não há clientes cadastrados...</h1>}
             {allClients && allClients.map(cliente => (
            <ListClient
            id = {cliente.id}
            tipocliente = {cliente.tipocliente}
            situacaocliente = {cliente.situacaocliente}
            nomecliente = {cliente.nomecliente}
            razaosobrenome = {cliente.razaosobrenome}
            />
            
                
             ))}
            
        </>
    )
}
export default Listar
