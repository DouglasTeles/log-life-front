import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import api from '../services/api'



function ListClient({
    id,
    tipocliente,
    situacaocliente, 
    nomecliente,
    razaosobrenome,
})

{
    const [token] = useState(localStorage.getItem('token'))


async function deleteClient(){
    
   try {
    if (window.confirm("Deseja realmente deletar o Cliente?")) {
        await api.delete(`cliente/${id}/delete`, {
            headers:{
                token:token
            }
        })
        window.alert("Exclusão realizada com sucesso!");
        window.location.reload(); 
      }
    
    
   
    
   }
    catch (error) {
    alert(error)
   }

    
}
    

    return (
        <>
         
            <div className="card-view">

                <div className="resume">
                <label>CLIENTE ID: </label>
                <label>{id}</label><br /><hr/>
                <label>TIPO DE CLIENTE: </label>
                <label>{tipocliente}</label><br /><hr/>
                <label>SITUAÇÃO DO CLIENTE: </label>
                <label>{situacaocliente}</label><br /><hr/>
                <label>NOME: </label>
                <label>{nomecliente}</label><br /><hr/>
                <label>RAZÃO SOCIAL ou SOBRENOME: </label>
                <label>{razaosobrenome}</label><br /><hr/>
                
                <Button variant="outline-danger" onClick={()=>{deleteClient()}}>Excluir</Button>
                <a href={`/${id}/editar`}><button type="button" class="btn btn-outline-primary" >Editar</button></a>
                <a href={`/${id}/detalhes`}><button type="button" class="btn btn-outline-info" >Detalhes</button></a>
                </div>       
                   
            </div>   
            
        </>
    )
}

export default ListClient
