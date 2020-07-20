import React from 'react'
import waiter from '../../imgs/waiter.svg'
import kitchen from '../../imgs/kitchen.svg'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './roles.css'

const Roles = () => {
  return (
    <Container className="containerRoles">
      <Row>
        <Col className="mx d-block">
          <Link to="/roles/piso" data-testid="Mesero">
            <img src={waiter} className="mx-auto d-block" alt="Mesero" />
          </Link>
        </Col>
        <Col className="mx d-block">
          <Link to="/roles/cocina" data-testid="Cocinero">
            <img src={kitchen} className="mx-auto d-block" alt="Chef" />
          </Link>
        </Col>
      </Row>
    </Container>
  )
}



export default Roles

