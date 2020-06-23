import React from 'react'
import ButtonReturn from './ButtonReturn'
import { firebase } from './firebase'
import {Link} from "react-router-dom"
import ButtonAddTable from './ButtonAddTable'

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



        <div>
            un chingo de mesas


            {
        mesa.map(item=>(
        <li className="list-group-item" 
        key={item.id}>
          <Link to= {`/roles/piso/${item.id}`}  className="btn btn-light">  
        {item.number}
        </Link>
         </li>
  ))
}


        <ButtonReturn/>
        <ButtonAddTable/>

        </div>
    )
}

export default Floor
