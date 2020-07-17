import React from 'react'
import waiter from '../../imgs/waiter.png'
import kitchen from '../../imgs/kitchen.png'
import {Container,Row, Col} from 'react-bootstrap'
import {Link} from "react-router-dom"

const Roles = () => {
    return (
                   
            <Container className="mt-5 mx d-block ">
            
            <Row>
              <Col><Link to="/roles/piso" data-testid= "Mesero"><img src={waiter} className="mx-auto d-block" alt="Mesero"/> </Link></Col>
              <Col><Link to="/roles/cocina" data-testid= "Cocinero"><img src={kitchen} className="mx-auto d-block" alt="Chef"/></Link></Col>
            </Row>
             
            </Container>
           
    )
}



export default Roles

