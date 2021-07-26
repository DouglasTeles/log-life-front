import React from 'react'

function loadView({
    tipocliente,
    situacaocliente, 
    nomecliente,
    razaosobrenome,
    cnpjcpf,
    email,
    telefone,
    cep,
    rua,
    numero,
    cidade,
    estado,
    diahoraatt,
    veiculoutilizado,}) {
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

export default loadView
