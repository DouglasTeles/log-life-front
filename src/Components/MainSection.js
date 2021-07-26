import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Inputs from "./Inputs";
import Logo from "../assets/logo_loglife.png"
import api from '../services/api'
import LoadingIcon from "../assets/loading.png";
import login from "../Utils/login"

function MainSection({updateToken}) {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)


  const history = useHistory()


  async function Login(e){
    e.preventDefault()
    setLoading(true) 
    try {
    const response =  await api.post('login',{
        email,
        password

      })
      login(response)
      const {data} = response
      updateToken(data.token)
      
      
      history.push('/menu')
    } catch (error) {
      alert("Erro ao acessar, tente novamente!")
      setLoading(false) 
    }
  }

  return (
    <main>
      <div className="form-main">
        <form >
        <div  className="image-logo"><img src = {Logo} alt="Logo" /></div>
          <h1>Acesso restrito</h1>

          <fieldset>
          <Inputs 
            title="Usuário" 
            type="text" 
            state = {email}
            setState = {e =>setEmail(e.target.value) }
          />

          <Inputs 
            title="Senha" 
            type="password"
            state = {password}
            setState = {e =>setPassword(e.target.value) } 
          />  
            
          </fieldset>
          {loading ? 
          < img src = {LoadingIcon} alt="Loading" className="loading-register"
          
          />          
          :
          <>
          
          <button onClick={Login}>Entrar</button>
          </>
          }          
          <label htmlFor="labelclick">Ainda não possui cadastro? <a href="/user">Clique aqui</a> </label>
        </form>
      </div>
    </main>
  );
}

export default MainSection;
