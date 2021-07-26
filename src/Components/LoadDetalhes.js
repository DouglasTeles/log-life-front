import React, { useEffect, useState } from 'react'

import api from '../services/api'

import {useParams} from 'react-router-dom'

function LoadDetalhes(){
    const [token] = useState(localStorage.getItem('token'))
    
    const [tipocliente, setTipocliente] = useState('')
    const [situacaocliente, setSituacaocliente] = useState('')
    const [nomecliente, setNomecliente] = useState('')
    const [razaosobrenome, setRazaosobrenome] = useState('')
    const [cnpjcpf, setCnpjcpf] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [diahoraatt, setDiahoraatt] = useState('')
    const [veiculoutilizado, setVeiculoutilizado] = useState('')
    const {id} = useParams()
    
    
    useEffect(() => {
        async function getClient(){
            try {
                const getOneClient = await api.get(`clientes/${id}`, {
                    headers:{
                        token:token
                    }
                })
                
                const dataClient = getOneClient.data
                console.log(dataClient.diahoraatt)

                setTipocliente(dataClient.tipocliente)
                setSituacaocliente(dataClient.situacaocliente)
                setNomecliente(dataClient.nomecliente)
                setRazaosobrenome(dataClient.razaosobrenome)
                setCnpjcpf(dataClient.cnpjcpf)
                setEmail(dataClient.email)
                setTelefone(dataClient.telefone)
                setCep(dataClient.cep)
                setRua(dataClient.rua)
                setNumero(dataClient.numero)
                setCidade(dataClient.cidade)
                setEstado(dataClient.estado)
                setDiahoraatt(dataClient.diahoraatt)
                setVeiculoutilizado(dataClient.veiculoutilizado)

               
            }
             catch (error) {
              alert("Não foi carregar os dados do cliente!")  
            }
        } getClient()
    },)
    
    
    
   
    return (
        <>
            
            <div className="card-view">
                <div className="resume">
                <label>TIPO DE CLIENTE: </label>
                <label>{tipocliente}</label><br /><hr/>
                <label>SITUAÇÃO DO CLIENTE: </label>
                <label>{situacaocliente}</label><br /><hr/>
                <label>NOME: </label>
                <label>{nomecliente}</label><br /><hr/>
                <label>RAZÃO SOCIAL ou SOBRENOME: </label>
                <label>{razaosobrenome}</label><br /><hr/>
                <label>CNPJ ou CPF: </label>
                <label>{cnpjcpf}</label><br /><hr/>
                <label>E-MAIL: </label>
                <label>{email}</label><br /><hr/>
                <label>TELEFONE: </label>
                <label>{telefone}</label><br /><hr/>
                <label>CEP: </label>
                <label>{cep}</label><br /><hr/>
                <label>RUA: </label>
                <label>{rua}</label><br /><hr/>
                <label>NUMERO: </label>
                <label>{numero}</label><br /><hr/>
                <label>CIDADE: </label>
                <label>{cidade}</label><br /><hr/>
                <label>ESTADO: </label>
                <label>{estado}</label><br /><hr/>
                <label>DATA E HORA ATENDIMENTO: </label>
                <label>{diahoraatt}</label><br /><hr/>
                <label>VEÍCULOS UTILIZADOS: </label>
                <label>{veiculoutilizado}</label><br /><hr/>
                </div>
               
            </div>
           
        
            
        </>
            )

  
}

export default LoadDetalhes
