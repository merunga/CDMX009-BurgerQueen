import React from 'react'
import ButtonReturn from './ButtonReturn'
import { showTables, edit, showInfoTables } from '../controllers'
import Meals from './Meals'
import Ready from './Ready'


const Kitchen = () => {

  const [table, setTable] = React.useState([])
  const [state, setState] = React.useState("Pendiente")
 

  React.useEffect(() => {

    const obtenerDatos = async () => {
      try {
        const resul = await showTables()
        setTable(resul)
        console.log("esto es toda la trjeta" + resul)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [state])

  const changeState = async (item) => {
    try {
      const resul = await edit(item.id, "preparando")
      const newState = await showInfoTables(item.id)
      console.log("sttttaaaaaaa" + newState.status)
      const realState = newState.status
      const timeFinal = newState.timeOut
      setState(realState)
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div>
      <h1 className="text-danger"> Ordenes por preparar </h1>
    
      {
        table.map(item => (
          <div key={item.id} className="text-warning">
            { item.status ==="Enviado a cocina"  && 
           <Meals
          date={item.date}
          client={item.client}
          number={item.number}
          ids={item.id} />
        }

          { item.status ==="preparando"  && 
          <Meals
         date={item.date}
         client={item.client}
         number={item.number}
         ids={item.id} />
        }
           
              {
                item.status === "Enviado a cocina" && <button className="btn-warning" onClick={() => changeState(item)}>{item.status}</button>
                //item.status === "Enviado a cocina" ? <button className="btn-warning"
                // onClick={() => changeState(item)}>{state}</button>
                //   : console.log("acaba de llegar")
              }
            {
              item.status === "preparando" && <button className="btn-success"> {item.status} </button>
              //item.status === "preparando" ? <button className="btn-success"> {item.status} </button> : console.log("lista para entregar")     
            }

            {
              item.status ==="preparando" && <Ready numbers={item} />
              //item.status === "preparando" ? <Ready numbers={item} /> : console.log("yaaaaa")

            }
            {
            //  item.status ==="Orden Lista" && <TimeOut newDate={item.timeOut} />
            //  //item.status === "Orden Lista" ? <TimeOut newDate={item.timeOut} /> : console.log("creoooo que ya")

            }
          </div>

        ))
      }

      <ButtonReturn
        ruta="/roles"
        btnStyles="btn btn-secondary"
        text="Regresar" />
    </div>

  )
}

export default Kitchen