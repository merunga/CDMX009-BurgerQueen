import React from 'react'
import ButtonReturn from './ButtonReturn'
import { firebase } from './firebase'
import {Link} from "react-router-dom"


const Floor = () => {

    
 const[mesa, setMesa]= React.useState([])

 React.useEffect(() => {

    const obtenerDatos = async () => {
      try {

        const db = firebase.firestore()
        const data = await db.collection('tables').orderBy('number', 'desc').get()
        const arrayData= data.docs.map(doc=>({id : doc.id, ...doc.data()}))
        
        //console.log(arrayData)
        setMesa(arrayData)

       

      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()

  }, [])


    

    return (



        <div className="text-center">
            <h1  className="text-warning">Mesas Activas</h1>


            {
        mesa.map(item=>(
        <p  key={item.id}>
          <Link to= {`/roles/piso/${item.id}`} className="btn btn-outline-warning btn-lg btn-block">  
        {item.number}
        </Link>
         </p>
  ))
}
<ButtonReturn
        ruta ="/roles"
        btnStyles = "btn btn-dark"
        text = "Regresar"/>
        <hr/>
        <ButtonReturn 
        ruta ="/roles/piso/mesaNueva"
        btnStyles = "btn btn-warning"
        text = "Agregar Mesa" />

        </div>
    )
}

export default Floor
