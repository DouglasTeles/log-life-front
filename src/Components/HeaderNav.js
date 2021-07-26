import { Dropdown } from 'react-bootstrap'

import React from 'react'
import Menu from '../assets/drop.png'
import Logo from '../assets/logo_loglife.png'


function HeaderNav({clearToken}) {

    function logout(e){
            localStorage.clear()
            clearToken()
    }

    return (
        <header>
            <nav>
                <a href="/menu"><img alt="Logo" src={Logo} /></a>

                <div>
                    <a className="a" href="/menu">Início</a>
                    <a className="a"  href="/cadastro">Adicionar Clientes</a>
                    <a className="a"  href="/cliente/listar">Editar Clientes</a>
                    <a className="a"  href="/visualizar">Visualizar Clientes</a>
                    <a className="a" href="/#" onClick={logout}>Sair</a>
                </div>
                
            </nav>
           
            <Dropdown className="drop">
                <Dropdown.Toggle variant="" id="">
                <a href="/#"><img alt="Menu" src={Menu}/></a>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/menu">Início</Dropdown.Item>
                    <Dropdown.Item href="/cadastro">Adicionar Clientes</Dropdown.Item>
                    <Dropdown.Item href="/cliente/listar">Lista de Clientes</Dropdown.Item>
                    <Dropdown.Item href="/visualizar">Visualizar Clientes</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Sair</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            

        </header>
    )
}

export default HeaderNav
