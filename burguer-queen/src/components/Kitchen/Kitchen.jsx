//react-hooks/exhaustive-deps
import React from "react";
import ButtonReturn from "../ButtonReturn/ButtonReturn";
import { showTables2, edit, userLog } from "../../controllers";
import Meals from "../Meals/Meals";
import Ready from "../Ready/Ready";
import { Container, Row, Col } from "react-bootstrap";
import "./kitchen.css";
import LogOut from "../LogOut/LogOut";
import {withRouter} from 'react-router-dom'

const Kitchen = (props) => {
  const [table, setTable] = React.useState([]);
  React.useEffect(() => {
    const checkUser=()=>{
    
      if (userLog())
     { console.log("si existe")
      } else {
        console.log("no hay nadie logueado")
        props.history.push('/')
      }
    }
  
    checkUser()

    const cb = (result) => {
      setTable(result);
    };
    const unsubscribe = showTables2(cb);
    // return unsubscribe
    return () => {
      console.log("desmontando compornete Floor");
      unsubscribe();
    };
  }, [props.history]);

  const changeState = async (item) => {
    try {
      const resul = await edit(item.id, "Preparando");
      return resul;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="btnFix">
        {" "}
        <LogOut />
        <ButtonReturn ruta="/roles" btnStyles="btn return" text="Regresar" />
      </div>
      <h1 className="text-white mt-5"> Ordenes por preparar </h1>

      <div id="cardOrders" data-testid="allOrders">
        {table.map((item, index) => (
          <div id="oneOrder" data-testid={"orden"+index} key={item.id}>
            {item.status === "Enviado a cocina" && (
              <Meals
                date={item.date}
                client={item.client}
                number={item.number}
                // eslint-disable-next-line react-hooks/exhaustive-deps
                ids={item.id}
              />
            )}
            {item.status === "Preparando" && (
              <Meals
                date={item.date}
                client={item.client}
                number={item.number}
                ids={item.id}
              />
            )}
            {
              item.status === "Enviado a cocina" && (
                <button
                  className="btn buttons inKitchen"
                  onClick={() => changeState(item)}
                >
                  {item.status}
                </button>
              )
              //item.status === "Enviado a cocina" ? <button className="btn-warning"
              // onClick={() => changeState(item)}>{state}</button>
              //   : console.log("acaba de llegar")
            }
            {
              item.status === "Preparando" && (
                <button className="btn buttons inProcess ">
                  {" "}
                  {item.status}{" "}
                </button>
              )
              //item.status === "preparando" ? <button className="btn-success"> {item.status} </button> : console.log("lista para entregar")
            }

            {
              item.status === "Preparando" && <Ready numbers={item} />
              //item.status === "preparando" ? <Ready numbers={item} /> : console.log("yaaaaa")
            }
          </div>
        ))}
      </div>
    </Container>
  );
};

export default withRouter(Kitchen);
