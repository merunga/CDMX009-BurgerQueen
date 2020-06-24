import React from 'react'
import {Link} from "react-router-dom"
//import LogoStart from './LogoStart'
import queen from '../imgs/queen.png'
import ButtonReturn from './ButtonReturn'

const Login = () => {
    return (
        <div className="text-center">
           <div className="text-center">
  <img src={queen} className= "img-fluid mt-5" alt="..."/>
</div>
<hr/>

        <ButtonReturn 
        ruta = "/roles"
        btnStyles = "btn btn-warning btn-lg"
        text = "Entrar"/>
           
        </div>
    )
}

export default Login
