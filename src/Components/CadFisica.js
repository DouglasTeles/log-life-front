import React, { useState } from 'react'

function CadFisica( state, setS) {

    const [nomecliente, setNomecliente] = useState('')
    const [razaosobrenome, setRazaosobrenome ] = useState('')
    const [cnpjcpf, setCnpjcpf] = useState('')
    return (
        <>
            <div className="div-cliente"  onChange={e=>setNomecliente(e.target.value)}>
                            <label>Nome do Cliente</label><br />
                            <input type="text" id="nome-cliente"></input>
            </div>
            
            <div className="div-sobrenome" onChange={e=>setRazaosobrenome(e.target.value)}>
                            <label>Sobrenome</label><br />
                            <input type="text" id="sobrenome"></input>
            </div>
            <div className="div-cpf" onChange={e=>setCnpjcpf(e.target.value)}>
                            <label>CPF</label><br />
                            <input type="text" id="cpf"></input>
            </div>
        </>
    )
}

export default CadFisica
