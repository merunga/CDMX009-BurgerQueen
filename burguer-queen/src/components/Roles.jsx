import React from 'react'
import ButtonReturn from './ButtonReturn'


const Roles = () => {
    return (
        <div>
            Quien eres????? meser@ o cocina???


            <ButtonReturn 
            ruta = "/roles/cocina"
            btnStyles ="btn btn-danger"
            text = "COCINA"/>
            <ButtonReturn 
            ruta = "/roles/piso"
            btnStyles = "btn btn-warning"
            text = "PISO"/>
        </div>
    )
}



export default Roles
