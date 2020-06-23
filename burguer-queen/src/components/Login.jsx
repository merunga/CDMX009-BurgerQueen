import React from 'react'
import {Link} from "react-router-dom"
//import LogoStart from './LogoStart'
import queen from '../imgs/queen.png'

const Login = () => {
    return (
        <div className="text-center">
           <div className="text-center">
  <img src={queen} className= "img-fluid mt-5" alt="..."/>
</div>
<hr/>

            <Link to="/roles" className="btn btn-warning btn-lg"> Entrar </Link>
        </div>
    )
}

export default Login
