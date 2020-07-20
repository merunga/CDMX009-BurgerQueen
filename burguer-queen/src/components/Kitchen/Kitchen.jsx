//react-hooks/exhaustive-deps
import React from 'react'
import ButtonReturn from '../ButtonReturn/ButtonReturn'
import { showTables2, edit} from '../../controllers'
import Meals from '../Meals/Meals'
import Ready from '../Ready/Ready'
import { Container } from 'react-bootstrap'
import './kitchen.css';



const Kitchen = () => {
  const [table, setTable] = React.useState([])
 React.useEffect(() => {
    const cb = (result) => {
      setTable(result)
    
    }
    const unsubscribe = showTables2(cb)
    // return unsubscribe
    return () => {
      console.log('desmontando compornete Floor')
      unsubscribe();
    }

  }, [])

  const changeState = async (item) => {
    try {
      const resul = await edit(item.id, "Preparando")
      return resul
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container >
        <ButtonReturn
        ruta="/roles"
        btnStyles="btn return"
        text="Regresar" />
      <h1 className="text-white mt-5"> Ordenes por preparar </h1>
    
      <div id="cardOrders">
      { 
        table.map(item => (
          <div id="oneOrder" key={item.id} >
            {item.status === "Enviado a cocina" &&
              <Meals
                date={item.date}
                client={item.client}
                number={item.number}
                // eslint-disable-next-line react-hooks/exhaustive-deps 
                ids={item.id}
              />
            }
            {item.status === "preparando" &&
              <Meals
                date={item.date}
                client={item.client}
                number={item.number}
                ids={item.id}
              />
            }
            {
              item.status === "Enviado a cocina" && <button className="btn buttons inKitchen" onClick={() => changeState(item)}>{item.status}</button>
              //item.status === "Enviado a cocina" ? <button className="btn-warning"
              // onClick={() => changeState(item)}>{state}</button>
              //   : console.log("acaba de llegar")
            }
            {
              item.status === "preparando" && <button className="btn buttons inProcess "> {item.status} </button>
              //item.status === "preparando" ? <button className="btn-success"> {item.status} </button> : console.log("lista para entregar")     
            }

            {
              item.status === "preparando" && <Ready numbers={item} />
              //item.status === "preparando" ? <Ready numbers={item} /> : console.log("yaaaaa")
            }
          
            
          </div>

        ))
      }
      </div>

  
    </Container>

  )
}

export default Kitchen