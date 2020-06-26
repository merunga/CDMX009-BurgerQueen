import React from 'react'
import breakfast from '../imgs/breakfast.png'
import burgerTime from '../imgs/burgerTime.svg'
import ButtonReturn from './ButtonReturn'
import {breackfast, burgersTime} from '../utils/menus.js'
import ImgMenus from './ImgMenus'
import Form from './Form'
import CardBurger from './CardBurger'
import { createTable } from '../controllers';

const NewTable = () => {
  const [waiter, setWaiter] = React.useState("")
  const [client, setClient] = React.useState("")
  const [table, setTable] = React.useState("")
  const [cartDinner, setCartDinner] = React.useState(false)
  const [cardBreakfast, setCardBreacfast]= React.useState(false)
  const [orden, setOrden]= React.useState([])
  const [price, setPrice]=React.useState([])
 
  const prueba = () => {
    console.log("jjjjjjjj no sabemos que pedou")
    setCartDinner(false)
  }

  const addElement = async (e) => {
    e.preventDefault()
    setCardBreacfast(false)
    setCartDinner(false)

    if (!waiter.trim() || !client.trim() || !table.trim()) {
      console.log('está vacio')
      return
    }

    try {
      const data = await createTable({ client, employ:waiter, number: table, orden, price });
      console.log(data)
      setClient('')
      setTable('')
      setWaiter('')
      
      console.log("se guardó en bd")

    } catch (error) {
      console.log(error)
    }

    console.log("yeah")

  }

  const showDinnerOrBreakfast = (isDinner) => () => {
    setCartDinner(isDinner)
    setCardBreacfast(!isDinner)
  }

const addSomething =(item)=>{
  const newarray = []
  const arrayTotal = []
  const targ = (item.product)
  const targ2 = (item.precio)
  newarray.push(targ)
  setOrden([...orden," ", ...newarray])
  console.log(setOrden)
  arrayTotal.push(targ2)
  setPrice([...price, ...arrayTotal])
  
}






  const cartAMostrar = ((cartDinner && burgersTime) || (cardBreakfast && breackfast));

  return (
    <div className="text-center">
      <ul className="mt-5 ml-5 mr-5">
        
        <Form
        types="text"
        text="Meser@"
        changeAction= {e => setWaiter(e.target.value)}
        val= {waiter}/>

         <Form
         text= "Ingresar nombre del cliente"
         changeAction={e => setClient(e.target.value)}
         val={client}/>

        <Form
        types="number"
        text= "Ingrese número de mesa"
        changeAction={e => setTable(e.target.value)}
        val={table}/>
      </ul>
      
       <ImgMenus

       src={burgerTime}
       action= {showDinnerOrBreakfast(true)}/> 
       
       <ImgMenus
       src={breakfast}
       action= {showDinnerOrBreakfast(false)}/>
    
       
    
      <div>
        {(!cartAMostrar) && (
          <img src="https://http2.mlstatic.com/gato-persa-busca-novia-libre-de-pkd-gatitos-disponibles-D_NQ_NP_862913-MLM31839317244_082019-O.webp" alt="" className="btn"
              onClick={prueba} />
        )}
        {cartAMostrar && cartAMostrar.map(item=>(
          <div  key={item.id}>
            <CardBurger  element={item.product} price={item.precio} addToMenu= {()=>addSomething(item)}/>
          </div>
        ))}

      </div>

      <ButtonReturn
        ruta="/roles/piso"
        btnStyles= "btn btn-warning"
        text="Ver Mesas"
      />
      <button className="btn btn-warning"
        onClick={addElement}>Enviar orden </button>

    </div>
  )
}

export default NewTable
