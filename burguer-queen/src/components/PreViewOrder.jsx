import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const PreViewOrder = () => {
    const [preOrden, setPreOrden]= React.useState(false)


    return (
        <div>
        {
            preOrden&&
        
            <Card style={{ width: '18rem' }}>
  <Card.Header>Alimentos Añadidos </Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Aquí va lo que vamos a ordenar </ListGroup.Item>
   
  </ListGroup>
</Card>
}
        </div>
    )
}

export default PreViewOrder
