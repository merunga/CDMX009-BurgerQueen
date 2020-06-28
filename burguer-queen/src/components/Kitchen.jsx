import React from 'react'
import ButtonReturn from './ButtonReturn'
import { showTables, edit, showInfoTables } from '../controllers'
import Meals from './Meals'
import ListGroup from 'react-bootstrap/ListGroup'
import Ready from './Ready'
import TimeOut from './TimeOut'


const Kitchen = () => {

  const [table, setTable] = React.useState([])
  const [state, setState] = React.useState("Pendiente")
  const [time, setTime] = React.useState("")



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
      setTime(timeFinal)
     

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

            <Meals
              date={item.date}
              client={item.client}
              number={item.number}
              ids={item.id} />

            {
              item.status === "preparando" ? <button className="btn-success"

              > {item.status} </button> : console.log("lista para entregar")


            }
            {
              item.status === "Enviado a cocina" ? <button className="btn-warning"
                onClick={() => changeState(item)}
              >{state}</button> : console.log("acaba de llegar")
            }
            {
              item.status === "Orden Lista" ? <TimeOut newDate={item.timeOut}/>: console.log("creoooo que ya")

            }
            {item.status === "preparando" ? <Ready numbers={item} /> : console.log("yaaaaa")

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