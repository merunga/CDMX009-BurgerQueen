//react-hooks/exhaustive-deps
import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { showInfoTables } from "../controllers";
import cartKitchen from "../imgs/cartKitchen.jpg";

const Meals = (props) => {
  const [order, setOrder] = React.useState([]);

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const resul = await showInfoTables(props.ids);
        const products = resul.orden;
        setOrder(products);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <div className="mx-auto d-block">
      <Card style={{ width: "20rem" }}>
        <Card.Img src={cartKitchen} alt="Card image" />
        <Card.ImgOverlay>
          <h3 className="text-dark text-center">Pedidos</h3>
          <Card.Body className="text-dark text-center">
            <p>Hora de entrada: {props.date}</p>
            <Row>
              <Col>Cliente:{props.client}</Col>
              <Col xs lg="4">
                Mesa:{props.number}
              </Col>
            </Row>
            {order.map((item, idx) => (
              <div key={idx} className="mx-auto d-block">
                •{item.producto}
                {(item.producto === "Hamburguesa doble" ||
                  item.producto === "Hamburguesa Simple") && (
                  <div>{`(${item.type})`}</div>
                )}
              </div>
            ))}
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default Meals;
