import React from 'react'
import { firebase } from './firebase'
import breakfast from '../imgs/breakfast.png'
import burgerTime from '../imgs/burgerTime.svg'
import ButtonReturn from './ButtonReturn'
import { breackfast, burgersTime } from '../utils/menus.js'
import ImgMenus from './ImgMenus'
import Form from './Form'
import CardBurger from './CardBurger'

const NewTable = () => {

  const [waiter, setWaiter] = React.useState("")
  const [client, setClient] = React.useState("")
  const [table, setTable] = React.useState("")
  const [cartDinner, setCartDinner] = React.useState(false)
  const [cardBreakfast, setCardBreacfast] = React.useState(false)
  const [orden, setOrden] = React.useState([])
  const [price, setPrice] = React.useState([])




  const prueba = () => {

    console.log("jjjjjjjj no sabemos que pedou")
    setCartDinner(false)
  }

  const addElement = async (e) => {
    e.preventDefault()
    setCardBreacfast(false)
    setCartDinner(false)
    if (!waiter.trim()) {
      console.log('está vacio')
      return
    }
    if (!client.trim()) {
      console.log('está vacio')
      return
    }
    if (!table.trim()) {
      console.log('está vacio')
      return
    }

    try {

      const db = firebase.firestore()
      const newTable = {
        client: client,
        date: Date.now(),
        employ: waiter,
        number: table,
        orden: orden,
        status: "",
        timeIn: Date.now(),
        timeOut: "",
        price: price,
      }
      const data = await db.collection('tables').add(newTable)

      setClient('')
      setTable('')
      setWaiter('')

      console.log("se guardó en bd")

    } catch (error) {
      console.log(error)
    }

    console.log("yeah")
  }

  const showDinner = () => {
    setCartDinner(true)
    setCardBreacfast(false)
  }

  const showbreakfast = () => {
    setCardBreacfast(true)
    setCartDinner(false)
  }

  const addSomething = (item) => {

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

  return (
    <div className="text-center">
      <ul className="mt-5 ml-5 mr-5">

        <Form
          types="text"
          text="meser@"
          changeAction={e => setWaiter(e.target.value)}
          val={waiter} />

        <Form
          text="Ingresar nombre del cliente"
          changeAction={e => setClient(e.target.value)}
          val={client} />

        <Form
          types="text"
          text="Ingrese número de mesa"
          changeAction={e => setTable(e.target.value)}
          val={table} />
      </ul>
      <ImgMenus
        types="number"
        src={burgerTime}
        style="btn img-fluid mt-5"
        action={showDinner} />

      <ImgMenus
        src={breakfast}
        style="btn img-fluid mt-5"
        action={showbreakfast} />

      <div>
        {cartDinner ? burgersTime.map(item => (<div key={item.id}><CardBurger element={item.product} price={item.precio} addToMenu={() => addSomething(item)} /> </div>))

          : <img src="https://http2.mlstatic.com/gato-persa-busca-novia-libre-de-pkd-gatitos-disponibles-D_NQ_NP_862913-MLM31839317244_082019-O.webp" alt="" className="btn"
            onClick={prueba} />
            && cardBreakfast ? breackfast.map(item => (<div key={item.id}><CardBurger element={item.product} price={item.precio} addToMenu={()=>addSomething(item)} /> </div>))
            : <img src="https://http2.mlstatic.com/gato-persa-busca-novia-libre-de-pkd-gatitos-disponibles-D_NQ_NP_862913-MLM31839317244_082019-O.webp" alt="" className="btn"
              onClick={prueba} />
        }
      </div>

      <ButtonReturn
        ruta="/roles/piso"
        btnStyles="btn btn-warning"
        text="Ver Mesas"
      />
      <button className="btn btn-warning"
        onClick={addElement}>Enviar orden </button>

    </div>
  )
}

export default NewTable
