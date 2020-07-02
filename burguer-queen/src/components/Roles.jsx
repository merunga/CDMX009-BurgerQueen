import React from 'react'
import waiter from '../imgs/waiter.png'
import kitchen from '../imgs/kitchen.png'
import {Container,Row, Col} from 'react-bootstrap'
import {Link} from "react-router-dom"

const Roles = () => {
    return (
        <Container className="text-center">
            Quien eres????? meser@ o cocina???
            <Row>
              <Col><Link to="/roles/piso"><img src={waiter} className="mx-auto d-block"/> </Link></Col>
              <Col><Link to="/roles/cocina"><img src={kitchen} className="mx-auto d-block"/></Link></Col>
            </Row>

            </Container>
    )
}



export default Roles

