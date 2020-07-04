import React from 'react'
import ButtonReturn from './ButtonReturn'
import { Link } from "react-router-dom"
import { showTables2 } from '../controllers'
import iconTable from '../imgs/iconTable.png'

const Floor = () => {

  const [mesa, setMesa] = React.useState([])

  React.useEffect(() => {

    const cb = (result) => {
      setMesa(result)

    }
    const unsubscribe = showTables2(cb)
    // return unsubscribe
    return () => {
      console.log('desmontando compornete Floor')
      unsubscribe();
    }
  }, [])

  return (

    <div className="text-center">
      <div>
      </div>
      <h1 className="text-warning">Mesas Activas</h1>

      {
        mesa.map(item => (
          <div key={item.id}>
            <Link to={`/roles/piso/${item.id}`} className="btn">
            <h2 className= "text-warning">{item.number}</h2> <img src ={iconTable}  className="mx-auto d-block" alt="Tables"/>
            <h3 className="text-white">{item.status}</h3>


            </Link>


          </div>
        ))
      }

      <ButtonReturn
        ruta="/roles"
        btnStyles="btn btn-dark"
        text="Regresar" />
      
      <ButtonReturn
        ruta="/roles/piso/mesaNueva"
        btnStyles="btn btn-warning"
        text="Agregar Mesa" />

    </div>
  )
}

export default Floor
