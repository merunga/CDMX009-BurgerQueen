import React from 'react'
import {showInfoTables} from '../controllers'
import { useParams } from 'react-router-dom'

const GetCheck = (index) => {
    const { id } = useParams()
    const [total, setTotal] = React.useState([])
    const [suma, setSuma]=React.useState(total)
    React.useEffect(()=>{
        const obtenerDatos = async () => {
            try {
              const resul = await showInfoTables(id)
              setTotal(resul.price)
              console.log("chido"+resul.price)
              let priceTotal= resul.price.reduce((a, b) => a + b, 0);  
              console.log(priceTotal)
             setSuma(priceTotal)
      
            } catch (error) {
              console.log(error)
            }
          }
          obtenerDatos()
        
    },[])
    
           return (
            <div key={index}>
             {
                <h1 className="text-warning">Holaaaaaaaaaa{suma}</h1>
              }
                
            </div>
        )

    }
   


export default GetCheck
