import React, { useState } from 'react'
import api from '../services/api'

function CadComum() {

    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [diahoraatt, setDiahoraatt] = useState('')
    const [veiculoutilizado, setVeiculoutilizado] = useState('')


    return (
        <>
            <div className="div-email">
                            <label>Email</label><br />
                            <input type="text" id="email"  onChange={e=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="div-telefone">
                            <label>Telefone</label><br />
                            <input type="text" id="telefone"  onChange={e=>setTelefone(e.target.value)}></input>
                        </div>
                        <div className="div-cep">
                            <label>CEP</label><br />
                            <input type="text" id="cep"  onChange={e=>setCep(e.target.value)}></input>
                        </div>
                        <div className="div-rua">
                            <label>Rua</label><br />
                            <input type="text" id="rua"  onChange={e=>setRua(e.target.value)}></input>
                        </div>
                        <div className="div-numero">
                            <label>Número</label><br />
                            <input type="text" id="numero"  onChange={e=>setNumero(e.target.value)}></input>
                        </div>
                        <div className="div-cidade">
                            <label>Cidade</label><br />
                            <input type="text" id="cidade"  onChange={e=>setCidade(e.target.value)}></input>
                        </div>
                        <div className="div-estado">
                        <label>Estado</label>
                        <select name="estado" id="estado"  onChange={e=>setEstado(e.target.value)}>
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
                            <input type="text" id="sobrenome"  onChange={e=>setDiahoraatt(e.target.value)}></input>
                        </div>
                        <div className="select-veiculo">
                            <label >Veículo Utilizado</label>
                            <div>
                                <input type="checkbox" id="caminhao" name="caminhao"  onChange={e=>setVeiculoutilizado(e.target.name)} />
                                <label for="caminhao">Caminhão</label>
                            </div>
                            
                            <div>
                                <input type="checkbox" id="carro" name="carro" onChange={e=>setVeiculoutilizado(e.target.name)} />
                                <label for="carro">Carro</label>
                            </div>
                            <div>
                                <input type="checkbox" id="moto" name="moto" onChange={e=>setVeiculoutilizado(e.target.name)} />
                                <label for="moto">Moto</label>
                            </div>
                        </div>
        </>
    )
}

export default CadComum
