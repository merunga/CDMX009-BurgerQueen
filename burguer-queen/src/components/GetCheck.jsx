import React from 'react'
import {showInfoTables} from '../controllers'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const GetCheck = (index) => {
    const { id } = useParams()
    const [total, setTotal] = React.useState([])
    const [suma, setSuma]=React.useState(total)
    const[finalOrder, setFinalOrder]= React.useState([])
    React.useEffect(()=>{
        const obtenerDatos = async () => {
            try {
              const resul = await showInfoTables(id)
              setTotal(resul)
              console.log("chido"+resul.price)
              const products= resul.orden
              setFinalOrder(products)
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
            <div >


<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
           <ListGroup.Item className="font-weight-bold"> <h2>Burger Queen </h2> <p>{total.date}</p>
            <p>Cliente: {total.client}</p> 
            </ListGroup.Item>
          

  {
                
                finalOrder.map(item=> (
              
                  <ListGroup.Item key= {item.id}>
                 {item.producto}  $ {item.precio}
                    
                 </ListGroup.Item>
                ))
                
              } 
   
    <ListGroup.Item className= "text-danger font-weight-bold"> ToTAL: $ {suma}</ListGroup.Item>
  </ListGroup>
</Card>
             
             

           
            </div>

        )

    }
   


export default GetCheck
