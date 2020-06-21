import React from 'react'
import {Link} from "react-router-dom"

const ButtonAddTable = () => {
    return (
        <div>
             <Link to="/roles/piso/mesaNueva" className="btn btn-dark"> Agregar Mesa </Link>
        </div>
    )
}

export default ButtonAddTable
