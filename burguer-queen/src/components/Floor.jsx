import React from 'react'
import ButtonReturn from './ButtonReturn'
import { firebase } from './firebase'

const Floor = () => {

    
 const[mesa, setMesa]= React.useState([])

 React.useEffect(() => {

    const obtenerDatos = async () => {
      try {

        const db = firebase.firestore()
        const data = await db.collection('tables').get()
        const arrayData= data.docs.map(doc=>({id : doc.id, ...doc.data()}))
        
        console.log(arrayData)
        setMesa(arrayData)

      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()

  }, [])

const prueba =()=>{
    console.log("estamos en pruebas")
}
    

    return (



        <div>
            un chingo de mesas


            {
        mesa.map(item=>(
        <li className="list-group-item" 
        key={item.id}
        onClick={prueba}>
        {item.number}
         </li>
  ))
}


        <ButtonReturn/>

        </div>
    )
}

export default Floor
