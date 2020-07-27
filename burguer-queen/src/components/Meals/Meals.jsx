//react-hooks/exhaustive-deps
import React from "react";
import { showInfoTables } from "../../controllers";

const Meals = (props) => {
  const [order, setOrder] = React.useState([]);

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const resul = await showInfoTables(props.ids);
        const products = resul.orden;

        let orderAgrup = products.reduce((result, item) => {
          if (!result.hasOwnProperty(item.id)) {
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
        setOrder(orderAgrup);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <div className="mx-auto d-block">
      <div className="card bg-light mb-3" style={{ width: "22rem" }}>
        <div className="card-header" >
          <h3>Orden Mesa: {props.number}</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.date}</h5>
          <h5 className="card-title">Cliente:{props.client}</h5>
          <div data-testid="meals">
            {order.map((item, idx) => (
              <div  key={idx} className="mx-auto d-block">
                <h3 data-testid={"orden"+ idx}>
                  •{item.qty} {item.producto}
                </h3>
                {(item.producto === "Hamburguesa doble" ||
                  item.producto === "Hamburguesa Simple") && (
                  <div>
                    <h3>{`(${item.type})`}</h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
