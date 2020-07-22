import React from "react";
import breakfast from "../../imgs/breakfast.png";
import burgerTime from "../../imgs/burgerTime.svg";
import iconDelete from "../../imgs/iconDelete.png";
import hamburger from "../../imgs/hamburger.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";
import ImgMenus from "../ImgMenus/ImgMenus";
import Form from "../Form/Form";
import CardBurger from "../CardBurger/CardBurger";
import { createTable } from "../../controllers";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import { breackfast, burgersTime } from "../../utils/menus.js";
import './newTable.css';

const shortid = require("short-id");

const NewTable = (props) => {
  const [waiter, setWaiter] = React.useState("");
  const [client, setClient] = React.useState("");
  const [table, setTable] = React.useState("");
  const [cartDinner, setCartDinner] = React.useState(false);
  const [cardBreakfast, setCardBreacfast] = React.useState(false);
  const [date, setDate] = React.useState("");
  const newarray = [];

  const addElement = async (e) => {
    e.preventDefault();
    setCardBreacfast(false);
    setCartDinner(false);

    if (!waiter.trim() || !client.trim() || !table.trim()) {
      console.log("está vacio");
      return;
    }
    try {
      const data = await createTable({
        client,
        employ: waiter,
        number: table,
        orden: props.orden,
        date,
      });
      console.log(data);
      setClient("");
      setTable("");
      setWaiter("");
      props.setOrden([]);
      

      console.log("se guardó en bd");
    } catch (error) {
      console.log(error);
    }
    console.log("yeah");
  };

  const showDinnerOrBreakfast = (isDinner) => () => {
    setCartDinner(isDinner);
    setCardBreacfast(!isDinner);
  };

  const addSomething = (item) => {
    //item.flavor.forEach(element =>console.log(element))
    //let flavor = e.target(item.)
    //if(item.product !== "Hamburguesa Simple" || item.product !=="Hamburguesa doble"){
    const targ = {
      producto: item.product,
      precio: item.precio,
      id: shortid.generate(),
    };
    newarray.push(targ);
    props.setOrden([...props.orden, ...newarray]);
    console.log(props.orden);
    

    let dates = new Date();
    dates += Date.now();
    const date1 = dates.slice(0, 25);
    setDate(date1);

    //}
  };

  const deleteItem = (id, orden) => {
    console.log("voy a borrar");
    const arrayFiltrado = orden.filter((item) => item.id !== id);
    props.setOrden(arrayFiltrado);
  };

  const cartAMostrar =
    (cartDinner && burgersTime) || (cardBreakfast && breackfast);
  return (
    <div className="text-center">
      <ul className="mt-5 ml-5 mr-5 mx-auto d-block">
        <Form
          types="text"
          text="Meser@"
          changeAction={(e) => setWaiter(e.target.value)}
          val={waiter}
        />
        <Form
          text="Ingresar nombre del cliente"
          changeAction={(e) => setClient(e.target.value)}
          val={client}
        />
        <Form
          types="number"
          text="Ingrese número de mesa"
          changeAction={(e) => setTable(e.target.value)}
          val={table}
        />
      </ul>
     
      <div>
        <Row  className="navButtons">
          <Col>
            <button alt="FirstMeal" className="btn btn-meal" onClick={showDinnerOrBreakfast(true)}>Comidas</button> 
          </Col>
          <Col>
            <button alt="SecondMeal" className="btn btn-meal" onClick={showDinnerOrBreakfast(false)}>Desayunos</button> 
          </Col>
          <Col>
          <ButtonReturn
        ruta="/roles/piso"
        btnStyles="btn buttonReturn"
        text="Ver Mesas"
      />
          </Col>
        </Row>
      </div>
      <div>
        {!cartAMostrar && (
          <img
            src={hamburger}
            alt=""
            className="btn"
          />
        )}
        <Container>
          <Row>
            <Col className="fixSize md-6" >
              {cartAMostrar &&
                cartAMostrar.map((item) => (
                  <CardBurger
                    newarray={newarray}
                    key={item.id}
                    element={item.product}
                    options={item.flavor}
                    price={item.precio}
                    addToMenu={() => addSomething(item)}
                    setOrden={props.setOrden}
                    orden={props.orden}
                  />
                ))}
            </Col>
            <Col className="colCenter">
              {props.orden.length > 0 && (
                <Card className="backColor center-block" style={{ width: "18rem" }}>
                  <Card.Header className= "backHeader">Alimentos Añadidos </Card.Header>
                  <ListGroup variant="flush">
                      <div className="text-dark font-weight-bold"  >
                        {props.orden.map((items) => (
                          <ListGroup.Item key={items.id}>
                          <Row>
                          <Col>{items.producto}</Col>
                          <Col xs lg="2"><img
                          src={iconDelete}
                          width="25"
                          height="25"
                          alt=""
                          onClick={() => deleteItem(items.id, props.orden)}/>
                         </Col>
                        
                          </Row>
                          {(items.producto === "Hamburguesa doble" || items.producto === "Hamburguesa Simple")&&
                          <p>{`(${items.type})`}</p>
                          }
                            
                            
                          </ListGroup.Item>
                        ))}
                      </div>
                  
                  </ListGroup>
                  <button className="btn btn-warning" onClick={addElement}>
                    Enviar orden
                  </button>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NewTable;
