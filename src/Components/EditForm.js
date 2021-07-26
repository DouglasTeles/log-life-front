import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { Form } from 'react-bootstrap';
import {useParams} from 'react-router-dom'


function EditForm() {
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
                setVeiculoutilizado("")

               
            }
             catch (error) {
              alert("Não foi carregar os dados do cliente!")  
            }
        } getClient()
    }, )

    async function saveUpdate() {
        try {
            await api.put(`cliente/${id}/update`, {
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


            },{
                headers:{
                   token:token
                }            
            })
            alert("Cadastro atualizado com sucesso!")
            loadView() 
           
        } catch (error) {
            alert(error)
        }


    }
    
    function loadView() {
        window.location.href = '/cliente/listar';
    }

    return (
        <>
       
            <div className="form-cadastro">
                <form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <fieldset className="field">
                        <div className="select">
                            <label>Tipo de Cliente</label> <br></br>
                            <select name="tipo" id="tipo" value={tipocliente} onChange={e => setTipocliente(e.target.value)} >
                                <option value="Pessoa Física" >Pessoa Física</option>
                                <option value="Pessoa Juridíca"  >Pessoa Juridíca</option>
                            </select>                        
                        </div>
                        <div className="input-button" value={situacaocliente} onChange={e => setSituacaocliente(e.target.value)}>
                            <label>Situação do Cliente:</label><br />
                            <input type="radio" id="Ativo" name="situacao" value="Ativo" />
                            <label for="Ativo">Ativo</label><br />
                            <input type="radio" id="Inativo" name="situacao" value="Inativo" />
                            <label for="Inativo">Inativo</label><br></br>
                        </div>


                        {tipocliente === "Pessoa Física" ?

                            <>
                                <div className="div-cliente" onChange={e => setNomecliente(e.target.value)}>
                                    <label>Nome do Cliente</label><br />
                                    <input type="text" id="nome-cliente" value={nomecliente}></input>
                                </div>

                                <div className="div-sobrenome" onChange={e => setRazaosobrenome(e.target.value)}>
                                    <label>Sobrenome</label><br />
                                    <input type="text" id="sobrenome" value={razaosobrenome}></input>
                                </div>
                                <div className="div-cpf" onChange={e => setCnpjcpf(e.target.value)}>
                                    <label>CPF</label><br />
                                    <input type="text" id="cpf" value={cnpjcpf}></input>
                                </div>
                            </>

                            :

                            <>
                            
                                <div className="div-fantasia" onChange={e => setNomecliente(e.target.value)}>
                                    <label>Nome Fantasia</label><br />
                                    <input type="text" id="nome-fantasia" value={nomecliente}></input>
                                </div>
                                <div className="div-social" onChange={e => setRazaosobrenome(e.target.value)}>
                                    <label>Razão Social</label><br />
                                    <input type="text" id="razao-social" value={razaosobrenome}></input>
                                </div>
                                <div className="div-cnpj" onChange={e => setCnpjcpf(e.target.value)}>
                                    <label>CNPJ</label><br />
                                    <input type="text" id="cnpj" value={cnpjcpf}></input>
                                </div>

                            </>

                        }
                        <div className="div-email">
                            <label>Email</label><br />
                            <input type="text" id="email" value={email}  onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div className="div-telefone">
                            <label>Telefone</label><br />
                            <input type="text" id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)}></input>
                        </div>
                        <div className="div-cep">
                            <label>CEP</label><br />
                            <input type="text" id="cep" value={cep} onChange={e => setCep(e.target.value)}></input>
                        </div>
                        <div className="div-rua">
                            <label>Rua</label><br />
                            <input type="text" id="rua" value={rua} onChange={e => setRua(e.target.value)}></input>
                        </div>
                        <div className="div-numero">
                            <label>Número</label><br />
                            <input type="text" id="numero" value={numero} onChange={e => setNumero(e.target.value)}></input>
                        </div>
                        <div className="div-cidade">
                            <label>Cidade</label><br />
                            <input type="text" id="cidade" value={cidade} onChange={e => setCidade(e.target.value)}></input>
                        </div>
                        <div className="div-estado">
                            <label>Estado</label> <br></br>
                            <select name="estado" id="estado" value={estado} onChange={e => setEstado(e.target.value)}>
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
                            <input type="text" id="sobrenome" placeholder="ano-mês-dia hr:min" value={diahoraatt} onChange={e => setDiahoraatt(e.target.value)}></input><br></br>
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
                            <button className="salvar" type="submit" onClick={saveUpdate}>Salvar</button>
                           
                         
                            <button className="btn-cancelar"><a href="/cliente/listar">Cancelar</a></button>

                        </div>

                    </fieldset>
                    </Form.Group>  
                </form>
            </div>
           
        </>
        )

}


export default EditForm