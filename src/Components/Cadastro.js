import React, { useState } from 'react'
import api from '../services/api'

import {Form } from 'react-bootstrap';

function Cadastro() {
    const [token] = useState(localStorage.getItem('token'))

    const [tipocliente, setTipocliente] = useState('Pessoa Física')
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

    

    function validar(){
        
        if(nomecliente === ""){
            alert("O campo Nome do Cliente é obrigatório!")
            document.getElementById("nome-cliente").style.borderColor = "red";
            
            }         
            
            
        }
        
    

    // function loadPage(e) {
    //     e.preventDefault()
        
    // }
   
    async function cadastro(e) {
        validar()
        
      
        
        try {
            await api.post('cadastro', {
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
                veiculoutilizado
            }, {
                headers:{
                    token:token
                }
            })
           
            alert('Cliente cadastrado com sucesso')

            setTipocliente('')
            setSituacaocliente('')
            setNomecliente('')
            setRazaosobrenome('')
            setCnpjcpf('')
            setEmail('')
            setTelefone('')
            setCep('')
            setRua('')
            setNumero('')
            setCidade('')
            setEstado('')
            setDiahoraatt('')
            setVeiculoutilizado('')

        } catch (error) {
            alert(error)
        }


    }
    return (
        <>
            <div className="form-cadastro">
                <form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <fieldset className="field">
                        <div className="select">
                            <label htmlFor="label" >Tipo de Cliente</label> <br></br>
                            <select name="tipo" id="tipo" required onChange={e => setTipocliente(e.target.value)} >
                                <option value="Pessoa Física" >Pessoa Física</option>
                                <option value="Pessoa Juridíca"  >Pessoa Juridíca</option>
                            </select>                        
                        </div>
                        <div className="input-button" onChange={e => setSituacaocliente(e.target.value)}>
                            <label htmlFor="label">Situação do Cliente:</label><br />
                            <input type="radio" id="Ativo" name="situacao" value="Ativo" />
                            <label htmlFor="Ativo">Ativo</label><br />
                            <input type="radio" id="Inativo" name="situacao" value="Inativo" />
                            <label htmlFor="Inativo">Inativo</label><br></br>
                        </div>


                        {tipocliente === "Pessoa Física" ?

                            <>
                                <div className="div-cliente" onChange={e => setNomecliente(e.target.value)}>
                                    <label htmlFor="nome-cliente">Nome do Cliente</label><br />
                                    <input type="text" id="nome-cliente"></input>
                                </div>

                                <div className="div-sobrenome" onChange={e => setRazaosobrenome(e.target.value)}>
                                    <label nome-cliente="sobrenome">Sobrenome</label><br />
                                    <input type="text" id="sobrenome"></input>
                                </div>
                                <div className="div-cpf" onChange={e => setCnpjcpf(e.target.value)}>
                                    <label htmlFor="label">CPF</label><br />
                                    <input type="text" id="cpf"></input>
                                </div>
                            </>

                            :

                            <>
                            
                                <div className="div-fantasia" onChange={e => setNomecliente(e.target.value)}>
                                    <label>Nome Fantasia</label><br />
                                    <input type="text" id="nome-fantasia"></input>
                                </div>
                                <div className="div-social" onChange={e => setRazaosobrenome(e.target.value)}>
                                    <label>Razão Social</label><br />
                                    <input type="text" id="razao-social"></input>
                                </div>
                                <div className="div-cnpj" onChange={e => setCnpjcpf(e.target.value)}>
                                    <label>CNPJ</label><br />
                                    <input type="text" id="cnpj"></input>
                                </div>

                            </>

                        }
                        <div className="div-email">
                            <label>Email</label><br />
                            <input type="text" id="email" onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div className="div-telefone">
                            <label>Telefone</label><br />
                            <input type="text" id="telefone" onChange={e => setTelefone(e.target.value)}></input>
                        </div>
                        <div className="div-cep">
                            <label>CEP</label><br />
                            <input type="text" id="cep" onChange={e => setCep(e.target.value)}></input>
                        </div>
                        <div className="div-rua">
                            <label>Rua</label><br />
                            <input type="text" id="rua" onChange={e => setRua(e.target.value)}></input>
                        </div>
                        <div className="div-numero">
                            <label>Número</label><br />
                            <input type="text" id="numero" onChange={e => setNumero(e.target.value)}></input>
                        </div>
                        <div className="div-cidade">
                            <label>Cidade</label><br />
                            <input type="text" id="cidade" onChange={e => setCidade(e.target.value)}></input>
                        </div>
                        <div className="div-estado">
                            <label>Estado</label> <br></br>
                            <select name="estado" id="estado" onChange={e => setEstado(e.target.value)}>
                                <option >Selecione</option>
                                <option value="Acre">Acre</option>
                                <option value="Alagoas">Alagoas</option>
                                <option value="Amapá">Amapá</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Bahia">Bahia</option>
                                <option value="Ceará">Ceará</option>
                                <option value="Espírito Santo">Espírito Santo</option>
                                <option value="Goiás">Goiás</option>
                                <option value="Maranhão">Maranhão</option>
                                <option value="Mato Grosso">Mato Grosso</option>
                                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                                <option value="Minas Gerais">Minas Gerais</option>
                                <option value="Pará">Pará</option>
                                <option value="Paraíba">Paraíba</option>
                                <option value="Paraná">Paraná</option>
                                <option value="Pernambuco">Pernambuco</option>
                                <option value="Piauí">Piauí</option>
                                <option value="Rio de Janeiro">Rio de Janeiro</option>
                                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                                <option value="Rondônia">Rondônia</option>
                                <option value="Roraima">Roraima</option>
                                <option value="Santa Catarina">Santa Catarina</option>
                                <option value="São Paulo">São Paulo</option>
                                <option value="Sergipe">Sergipe</option>
                                <option value="Tocantins">Tocantins</option>
                                <option value="Distrito Federal">Distrito Federal</option>
                            </select>
                        </div>
                        <div className="div-horario">
                            
                            <label>Data e hora de atendimento</label><br />
                            <input type="text" id="sobrenome" placeholder="ano-mês-dia hr:min" onChange={e => setDiahoraatt(e.target.value)}></input><br></br>
                            <small>ANO / MÊS / DIA HR:MINT</small>
                        </div>
                        <div className="select-veiculo">
                            <label >Veículo Utilizado</label>
                            <div>
                                <input type="checkbox" id="caminhao" name="caminhao" onChange={e => setVeiculoutilizado(e.target.name)} />
                                <label for="caminhao">Caminhão</label>
                            </div>

                            <div>
                                <input type="checkbox" id="carro" name="carro" onChange={e => setVeiculoutilizado(e.target.name)} />
                                <label for="carro">Carro</label>
                            </div>
                            <div>
                                <input type="checkbox" id="moto" name="moto" onChange={e => setVeiculoutilizado(e.target.name)} />
                                <label for="moto">Moto</label>
                            </div>
                        </div>
                        <div className="Buttons">
                            <label>Preencha todos os campos para salvar!!!</label>
                        </div>
                        {situacaocliente && nomecliente &&razaosobrenome&&cnpjcpf&&email&&telefone&&cep&&rua&&numero&&cidade&&estado&&diahoraatt&&veiculoutilizado&&
                             <div className="Buttons">
                                    <button className="salvar" type="submit" onClick={cadastro}>Salvar</button>
                             </div>
                        }

                        

                       <div className="Buttons">
                            <button className="btn-cancelar"><a href="/">Cancelar</a></button>
                        </div>
                           
                         
                           

                       

                    </fieldset>
                    </Form.Group>  
                </form>
            </div>
            
        </>
    )
}

export default Cadastro
