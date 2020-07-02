import React from 'react'
import Card from 'react-bootstrap/Card'

function CardStatus(props) {
  return (
    <div>
      <Card border="warning" bg="secondary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <div>
            {props.contenido}
          </div>
        </Card.Body>
      </Card>

    </div>
  )
}

export default CardStatus
