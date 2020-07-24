import React from 'react'
import waiter from '../../imgs/waiter.svg'
import kitchen from '../../imgs/kitchen.svg'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './roles.css'
import { userLog } from "../../controllers";
import {withRouter} from 'react-router-dom'
import LogOut from '../LogOut/LogOut'

const Roles = (props) => {
const[user, setUser]= React.useState(null)

React.useEffect(()=>{
  const checkUser=()=>{
    
    if (userLog())
   { console.log("si existe")
    setUser(userLog())
    } else {
      console.log("no hay nadie logueado")
      props.history.push('/')
    }
  }

  checkUser()
  
  
}, [props.history])

  return (
    <div className="divRoles">
      <LogOut/>
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
    </div>
  )
}



export default withRouter(Roles)

