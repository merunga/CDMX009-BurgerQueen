import React from 'react'
import { getOut } from "../../controllers";
import { withRouter } from 'react-router-dom';
import './logOut.css'

const LogOut = (props) => {


    const closeSesion=()=>{
 getOut()
    props.history.push("/")
 
    }



    return (
        <div>
            <button className="btn btnStyle mr-3" onClick={()=>closeSesion()}>Cerrar Sesión</button>
        </div>
    )
}

export default withRouter(LogOut)
