//react-hooks/exhaustive-deps
import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { showInfoTables } from '../controllers'

const Meals = (props) => {
const [order, setOrder] = React.useState([])

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const resul = await showInfoTables(props.ids)
        const products = resul.orden
        setOrder(products)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()

  }, [])

  return (
    <div className="mx-auto d-block">
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item className="font-weight-bold"> <h2>Pedidos </h2>
            <p>Hora de entrada: {props.date}</p>
            <p>Cliente:{props.client}</p>
            <p>Mesa:{props.number}</p>
            

          </ListGroup.Item>
          {
            order.map(item => (
              <ListGroup.Item key={item.id}>
               {item.producto}
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </Card>
    </div>
  )
}

export default Meals
