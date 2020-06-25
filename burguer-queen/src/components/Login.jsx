import React from 'react'
import ButtonReturn from './ButtonReturn'
import queen from '../imgs/queen.png'

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
