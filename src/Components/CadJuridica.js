import React, { useState } from 'react'

function CadJuridica( state, setState ) {

    const [nomecliente, setNomecliente] = useState('')
    const [razaosobrenome, setRazaosobrenome ] = useState('')
    const [cnpjcpf, setCnpjcpf] = useState('')

    return (
        <>
             <div className="div-fantasia"  onChange={e=>setNomecliente(e.target.value)}>
                            <label>Nome Fantasia</label><br />
                            <input type="text" id="nome-fantasia"></input>
            </div>
            <div className="div-social"  onChange={e=>setRazaosobrenome(e.target.value)}>
                            <label>Razão Social</label><br />
                            <input type="text" id="razao-social"></input>
            </div>
            <div className="div-cnpj" onChange={e=>setCnpjcpf(e.target.value)}>
                            <label>CNPJ</label><br />
                            <input type="text" id="cnpj"></input>
            </div>
                        
        </>
    )
}

export default CadJuridica
