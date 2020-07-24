import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { showInfoTables } from "../../controllers";

const GetCheck = ({ state }) => {
  const { id } = useParams();
  const [total, setTotal] = React.useState([]);
  const [suma, setSuma] = React.useState(total);
  const [finalOrder, setFinalOrder] = React.useState([]);

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const resul = await showInfoTables(id);
        setTotal(resul);
        //console.log("chido" + resul.orden.precio)

        const totalPrice = resul.orden.map((item) => item.precio);
        console.log(totalPrice);
        const products = resul.orden;
        let orderAgrup = products.reduce((result, item) => {
          if (!result.hasOwnProperty(item.id)) {
            console.log(item.id);
            result[item.id] = {
              ...item,
              qty: 1,
            };
          } else {
            result[item.id].qty += 1;
          }
          return result;
        }, {});
        orderAgrup = Object.values(orderAgrup);

        setFinalOrder(orderAgrup);
        let priceTotal = totalPrice.reduce((a, b) => a + b, 0);
        console.log(priceTotal);
        setSuma(priceTotal);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);
  const closeModal = (state) => {
    state(false);
  };

  return (
    <div>
      <Modal
        size="lg"
        show={true}
        onHide={() => closeModal(state)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h1 className="text-center">Burguer Queen </h1>
            <p className="text-center">Cliente: {total.client}</p>
            <hr className="text-bold" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs lg="2" className="text-center">
              <h2>Cant</h2>
            </Col>
            <Col className="text-center">
              <h2>Producto</h2>
            </Col>
            <Col xs lg="2" className="text-center">
              <h4>$Unitario</h4>
            </Col>
            <Col xs lg="2" className="text-center">
              <h4>$SubTotal</h4>
            </Col>
          </Row>

          {finalOrder.map((item) => (
            <Row key={item.id}>
              <Col xs lg="2" className="text-center">
                <h3>{item.qty}</h3>
              </Col>
              <Col className="text-center">
                <h3>{item.producto} </h3>
                {(item.producto === "Hamburguesa doble" ||
                  item.producto === "Hamburguesa Simple") && (
                  <h4>{`(${item.type})`}</h4>
                )}
              </Col>
              <Col xs lg="2">
                <h3>$ {item.precio}</h3>
              </Col>
              <Col xs lg="2">
                <h3>$ {item.qty * item.precio}</h3>
              </Col>
            </Row>
          ))}
          <h2 className="text-danger text-center">TOTAL: $ {suma}</h2>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GetCheck;
