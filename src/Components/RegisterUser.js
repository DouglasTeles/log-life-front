import React, { useState } from "react";
import api from '../services/api.js'
import { useHistory } from "react-router-dom";
import Inputs from "./Inputs";
import {Link} from 'react-router-dom'
import Logo from "../assets/logo_loglife.png"
import LoadingIcon from "../assets/loading.png";


function RegisterUser() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const history = useHistory()
  async function registrationHandler(e){
    e.preventDefault()
    setLoading(true)  
    try{

  
    const cad =   await api.post('novousuario', {
         
          email,
          password
      
      })  
    const messagem = cad.data.message 
    
     if(email === null || email === ""||email===undefined){
       alert("Email inválido")
       setLoading(false)
     }  
    if(messagem === "Email já existe"){
      alert("Já existe um cadastro com este Email!")
      setLoading(false)
     
    }else{
      alert("Cadastro salvo com sucesso!")
      history.push('/')
      setLoading(false)
      setEmail  ('')
      setPassword ('')
     
      
    }
    }    
   
    catch(err){
      alert(err.message)
      setLoading(false)
    }
   
  } 
 

  return (
    <main>
      
      <div className="form-main">
        <form>
        
          <img src = {Logo} alt="Logo Sarc" />
          <h1>Criar Conta</h1>
          <fieldset>

          <Inputs 
            title="E-mail" 
            type="text" 
            state = {email}
            setState = {e =>setEmail(e.target.value) }
          />
          
          <p>Este campo não pode ser vazio</p>   
          
            
          <Inputs 
            title="Senha" 
            type="password"
            state = {password}
            setState = {e =>setPassword(e.target.value) }
          />
          {password.length < 8 ? 
          <p>
           Senha muito curta
          </p>      
          :
          <p>
           Senha válida..
          </p> 
          } 

          

          {/* <Inputs 
            title="Confirm Password" 
            type="password" 
            state = {password1}
            setState = {e =>setPassword1(e.target.value) }
          /> */}

          </fieldset>
          {loading ? 
          < img src = {LoadingIcon} alt="Loading" className="loading-register"
           
          />          
          :
          <>
         <button 
            className="saveBtn" onClick={registrationHandler}
            >Salvar
          </button>
          </>
          }    
          <Link to = '/' className="linkCancel"> 
            <button className="btnCancel" >Cancel</button>
          </Link>          
        </form>
      </div>
    </main>
  );
}

export default RegisterUser;
