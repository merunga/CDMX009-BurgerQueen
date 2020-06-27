import React from 'react'
import ButtonReturn from './ButtonReturn'
import { Link } from "react-router-dom"
import { showTables } from '../controllers'

const Floor = () => {

  const [mesa, setMesa] = React.useState([])

  React.useEffect(() => {

    const obtenerDatos = async () => {
      try {
        const resul = await showTables()
        setMesa(resul)

      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()

  }, [])

  return (

    <div className="text-center">
      <div>
      </div>
      <h1 className="text-warning">Mesas Activas</h1>

      {
        mesa.map(item => (
          <p key={item.id}>
            <Link to={`/roles/piso/${item.id}`} className="btn btn-outline-warning btn-lg btn-block">
              {item.number}
            </Link>
          </p>
        ))
      }
      <ButtonReturn
        ruta="/roles"
        btnStyles="btn btn-dark"
        text="Regresar" />
      <hr />
      <ButtonReturn
        ruta="/roles/piso/mesaNueva"
        btnStyles="btn btn-warning"
        text="Agregar Mesa" />

    </div>
  )
}

export default Floor
