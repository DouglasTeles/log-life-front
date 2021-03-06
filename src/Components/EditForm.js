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
              alert("N??o foi carregar os dados do cliente!")  
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
                                <option value="Pessoa F??sica" >Pessoa F??sica</option>
                                <option value="Pessoa Jurid??ca"  >Pessoa Jurid??ca</option>
                            </select>                        
                        </div>
                        <div className="input-button" value={situacaocliente} onChange={e => setSituacaocliente(e.target.value)}>
                            <label>Situa????o do Cliente:</label><br />
                            <input type="radio" id="Ativo" name="situacao" value="Ativo" />
                            <label for="Ativo">Ativo</label><br />
                            <input type="radio" id="Inativo" name="situacao" value="Inativo" />
                            <label for="Inativo">Inativo</label><br></br>
                        </div>


                        {tipocliente === "Pessoa F??sica" ?

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
                                    <label>Raz??o Social</label><br />
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
                            <label>N??mero</label><br />
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
                                <option value="Amap??">Amap??</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Bahia">Bahia</option>
                                <option value="Cear??">Cear??</option>
                                <option value="Esp??rito Santo">Esp??rito Santo</option>
                                <option value="Goi??s">Goi??s</option>
                                <option value="Maranh??o">Maranh??o</option>
                                <option value="Mato Grosso">Mato Grosso</option>
                                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                                <option value="Minas Gerais">Minas Gerais</option>
                                <option value="Par??">Par??</option>
                                <option value="Para??ba">Para??ba</option>
                                <option value="Paran??">Paran??</option>
                                <option value="Pernambuco">Pernambuco</option>
                                <option value="Piau??">Piau??</option>
                                <option value="Rio de Janeiro">Rio de Janeiro</option>
                                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                                <option value="Rond??nia">Rond??nia</option>
                                <option value="Roraima">Roraima</option>
                                <option value="Santa Catarina">Santa Catarina</option>
                                <option value="S??o Paulo">S??o Paulo</option>
                                <option value="Sergipe">Sergipe</option>
                                <option value="Tocantins">Tocantins</option>
                                <option value="Distrito Federal">Distrito Federal</option>
                            </select>
                        </div>
                        <div className="div-horario">
                            
                            <label>Data e hora de atendimento</label><br />
                            <input type="text" id="sobrenome" placeholder="ano-m??s-dia hr:min" value={diahoraatt} onChange={e => setDiahoraatt(e.target.value)}></input><br></br>
                            <small>ANO / M??S / DIA HR:MINT</small>
                        </div>
                        <div className="select-veiculo">
                            <label >Ve??culo Utilizado</label>
                            <div>
                                <input type="checkbox" id="caminhao" name="caminhao" onChange={e => setVeiculoutilizado(e.target.name)} />
                                <label for="caminhao">Caminh??o</label>
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