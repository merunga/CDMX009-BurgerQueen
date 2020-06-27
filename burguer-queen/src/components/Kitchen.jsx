import React from 'react'
import ButtonReturn from './ButtonReturn'
import { showTables, edit, showInfoTables } from '../controllers'
import Meals from './Meals'
import ListGroup from 'react-bootstrap/ListGroup'


const Kitchen = () => {

const[table, setTable]= React.useState([])


const[state, setState]=React.useState("Pendiente")



React.useEffect(()=>{

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
  



}, [])




const changeState =async(item)=>{
    
    try {
        const resul = await edit(item.id, "preparando")
           const newState= await showInfoTables(item.id)
           console.log("sttttaaaaaaa" + newState.status)
           const realState= newState.status
           setState(realState)

      } catch (error) {
        console.log(error)
      }
      
}


    return (
        <div>
              <h1  className="text-danger"> Ordenes por preparar </h1>

              {
        table.map(item => (
          <div key={item.id} className="text-warning">
              
                <Meals
                date={item.date}
                client={item.client}
                number={item.number}
                ids= {item.id} />

        {
        item.status==="preparando"  ?   <button className="btn-success"
            
            > {item.status} </button> :  <button className="btn-warning"
        onClick={()=>changeState(item)}
        >{state}</button>


}
              
          </div>
           
        ))
      }

              <ButtonReturn
            ruta ="/roles"
            btnStyles = "btn btn-secondary"
            text="Regresar"/>
        </div>

        
    )
}

export default Kitchen