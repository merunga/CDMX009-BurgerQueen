import React from 'react'
import ButtonReturn from '../ButtonReturn/ButtonReturn'
import { Link } from "react-router-dom"
import { showTables2 } from '../../controllers'
import iconTable from '../../imgs/iconTable.png'
import {Row, Col} from 'react-bootstrap'

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

      <Row>
              <Col><ButtonReturn
        ruta="/roles"
        btnStyles="btn btn-dark"
        text="Regresar" /></Col>
              <Col> <ButtonReturn
        ruta="/roles/piso/mesaNueva"
        btnStyles="btn btn-warning"
        text="Agregar Mesa" /></Col>
            </Row>
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

      

    </div>
  )
}

export default Floor
