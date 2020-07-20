import React from 'react'
import ButtonReturn from '../ButtonReturn/ButtonReturn'
import { Link } from "react-router-dom"
import { showTables2 } from '../../controllers'
import iconTable from '../../imgs/iconTable.png'
import {Row, Col, Navbar, } from 'react-bootstrap'
import './floor.css';

const Floor = () => {
  const [mesa, setMesa] = React.useState([]);

  React.useEffect(() => {
    const cb = (result) => {
      setMesa(result);
    };
    const unsubscribe = showTables2(cb);
    // return unsubscribe
    return () => {
      console.log("desmontando compornete Floor");
      unsubscribe();
    }
     
  }, []);

  return (
    <div className="text-center">
      <Row>
        <Col  xs lg="3"> <Row>
       <Navbar id="navbar" fixed="top">
      
       <ButtonReturn  
        ruta="/roles"
        btnStyles="btn  btn-outline-warning btn-lg btn-block font-weight-bold "
        text="Roles" />
               <ButtonReturn
        ruta="/roles/piso/mesaNueva"
        btnStyles="btn  btn-outline-warning btn-lg btn-block font-weight-bold " 
        text="Agregar Mesa" />
         <ButtonReturn  
        ruta="/"
        btnStyles="btn  btn-outline-warning btn-lg btn-block font-weight-bold "
        text="Inicio" />
       
       </Navbar>
            </Row></Col>
           
    <Col id="activeTables">
      
    <h1 className="text-warning" id="titleTables">Mesas Activas</h1>
      <div data-testid="allClients" id="tables">{
        mesa.map((item, idx) => (
          <div  key={item.id}>
            <Link data-testid={idx} to={`/roles/piso/${item.id}`} className="btn" id={ `${item.id}`}>
            <h2 className= "text-white">{item.number}</h2> <img src ={iconTable}  className="mx-auto d-block" alt="Tables"/>
            <h3 className="text-white">{item.status}</h3>
            </Link>


          </div>
        ))
      }
</div>
</Col> 
</Row>
    </div>
  );
};

export default Floor;
