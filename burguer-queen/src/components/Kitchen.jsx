import React from 'react'
import ButtonReturn from './ButtonReturn'

const Kitchen = () => {
    return (
        <div>
              <h1  className="text-danger"> Ordenes por preparar </h1>
              <ButtonReturn
            ruta ="/roles"
            btnStyles = "btn btn-secondary"
            text="Regresar"/>
        </div>

        
    )
}

export default Kitchen