import React from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {useState} from 'react'
import Menu from '../Pages/Menu'
import Cadastrar from '../Pages/Cadastrar'
import Editar from '../Pages/Editar'
import Listar from '../Pages/Listar'
import Visualizar from '../Pages/Visualizar'
import Login from '../Pages/Login'
import User from '../Pages/User'
import Detalhes from '../Pages/Detalhes'

function Router() {

    const [token, setToken] = useState(localStorage.getItem('token'))
  
    function updateToken(t){
        setToken(t)
    }
    function clearToken(e){
        setToken(null)
    }

    return (
        <BrowserRouter htmlFor="BrowserRouter">
            <Switch htmlFor="Switch" >
                <Route htmlFor="Route" path='/'exact>
                    {token? <Redirect to= '/menu'/> : <Redirect to = '/'/>}
                    <Login updateToken={updateToken}/>
                </Route>
                <Route  htmlFor="Route" path='/user'>
                    <User />
                </Route>
                <Route htmlFor="Route"  path='/menu'>
                    {token? <Menu clearToken={clearToken} /> 
                        :
                        <Redirect to='/' />
                    }
                    
                </Route>
                <Route htmlFor="Route"  path='/cadastro'>
                    {token?  
                        <Cadastrar clearToken={clearToken}  />
                    :
                        <Redirect to='/' />
                    }
                   
                </Route>
                <Route htmlFor="Route"  path='/:id/editar'>
                    {token?  
                        <Editar clearToken={clearToken} />
                    :
                        <Redirect to='/' />
                    }
                                      
                </Route>
                <Route htmlFor="Route"  path='/:id/detalhes'>
                    {token?  
                        <Detalhes clearToken={clearToken} />
                    :
                        <Redirect to='/' />
                    }
                                      
                </Route>
                
                <Route htmlFor="Route"  path='/cliente/listar'>
                    {token?  
                       <Listar clearToken={clearToken} />
                    :
                        <Redirect to='/' />
                    }
                    
                </Route>
                <Route htmlFor="Route"  path='/visualizar'>
                    {token?  
                       <Visualizar clearToken={clearToken} />
                    :
                        <Redirect to='/' />
                    }                   
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router
