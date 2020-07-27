import React from 'react'
import queen from '../../imgs/queen.svg'
import ButtonReturn from '../ButtonReturn/ButtonReturn'
import { Button} from 'react-bootstrap'
import './login.css';
import RegisterUser from '../RegisterUser/RegisterUser';


const Login = () => {




    return (
        <div className="text-center lgn">
           <div className="text-center">
  <img src={queen} className= "img-fluid mt-5 " id="imgSize" alt="..." />
</div>

<RegisterUser/>


        </div>

        
    )
}

export default Login;
