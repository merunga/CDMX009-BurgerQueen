import React from "react";
import ButtonReturn from "../ButtonReturn/ButtonReturn";
import { Link } from "react-router-dom";
import { showTables2, userLog } from "../../controllers";
import iconTable2 from "../../imgs/iconTable2.png";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import LogOut from "../LogOut/LogOut";
import "./floor.css";

const Floor = (props) => {
  const [mesa, setMesa] = React.useState([]);

  React.useEffect(() => {
    const checkUser = () => {
      if (userLog()) {
        return userLog;
      } else {
        props.history.push("/");
      }
    };

    checkUser();

    const cb = (result) => {
      setMesa(result);
    };
    const unsubscribe = showTables2(cb);
    //return unsubscribe
    return () => {
      unsubscribe();
    };
  }, [props.history]);

  return (
    <div className="text-center allTheFloor">
      <Row>
        <Col className="cols-center" xs lg="3">
          {" "}
          <Row>
            <nav id="navbar">
              <ButtonReturn
                ruta="/roles"
                btnStyles="btn btn-floor font-weight-bold "
                text="Roles"
              />
              <ButtonReturn
                ruta="/roles/piso/mesaNueva"
                btnStyles="btn btn-floor font-weight-bold "
                text="Agregar Mesa"
              />
              <LogOut />
            </nav>
          </Row>
        </Col>

        <Col id="activeTables">
          <h1 className="text-warning" id="titleTables">
            Mesas Activas
          </h1>
          <div data-testid="allClients" id="tables">
            {mesa.map((item, idx) => (
              <div key={item.id}>
                <Link
                  data-testid={idx}
                  to={`/roles/piso/${item.id}`}
                  className="btn"
                  id={`${item.id}`}
                >
                  <h2 className="text-white">{item.number}</h2>{" "}
                  <img
                    src={iconTable2}
                    className="mx-auto d-block"
                    alt="Tables"
                  />
                  <h3 className="text-white">{item.status}</h3>
                </Link>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(Floor);
