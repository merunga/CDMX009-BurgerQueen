//react-hooks/exhaustive-deps
import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { showInfoTables } from '../../controllers'
import cartKitchen from '../../imgs/cartKitchen.jpg'
import { Row, Col } from "react-bootstrap";

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
      
      <div className="card bg-light mb-3"  style={{width: "18rem"}}>
  <div className="card-header">Orden Mesa: {props.number}</div>
  <div className="card-body">
    <h5 className="card-title">{props.date}</h5>
    <h5 className="card-title">Cliente:{props.client}</h5>
    <div>{order.map((item, idx) => (
              <div key={idx} className="mx-auto d-block">
                •{item.producto}
                {(item.producto === "Hamburguesa doble" ||
                  item.producto === "Hamburguesa Simple") && (
                  <div>{`(${item.type})`}</div>
                )}
              </div>
              
            ))}
            </div>
  </div>
</div>































      
    </div>
  );
};

export default Meals
