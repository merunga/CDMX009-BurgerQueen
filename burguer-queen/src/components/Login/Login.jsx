import React from 'react'
import queen from '../../imgs/queen.svg'
import ButtonReturn from '../ButtonReturn/ButtonReturn'
import './login.css';

const Login = () => {
    return (
        <div className="text-center lgn">
           <div className="text-center">
  <img src={queen} className= "img-fluid mt-5 " id="imgSize" alt="..." />
</div>

<ButtonReturn 
        ruta = "/roles"
        btnStyles = "btn firstButton"
        text = "Entrar"/>
        </div>
    )
}

export default Login;
