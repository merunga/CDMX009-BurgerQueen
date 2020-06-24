import React from 'react'
import { firebase } from './firebase'
import breakfast from '../imgs/breakfast.png'
import burgerTime from '../imgs/burgerTime.svg'
import ButtonReturn from './ButtonReturn'



const NewTable = () => {

  const [waiter, setWaiter] = React.useState("")
  const [client, setClient] = React.useState("")
  const [table, setTable] = React.useState("")

  const prueba = () => {

    console.log("jjjjjjjj no sabemos que pedou")
  }

  const addElement = async (e) => {
    e.preventDefault()

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
        orden: [],
        timeIn: Date.now(),
        timeOut: ""


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





  return (
    <div className="text-center">
      <ul className="mt-5 ml-5 mr-5">
        <input type="text"
          placeholder="meser@"
          className="form-control mb-2"
          onChange={e => setWaiter(e.target.value)}
          value={waiter}

        />
        <input type="text"
          placeholder="Ingresar nombre del cliente"
          className="form-control mb-2"
          onChange={e => setClient(e.target.value)}
          value={client} />


        <input type="text"
          placeholder="Mesa"
          className="form-control mb-2"
          onChange={e => setTable(e.target.value)}
          value={table} />

      </ul>

      <img src={burgerTime} alt="" className="btn img-fluid mt-5"
        onClick={prueba} />

      <img src={breakfast} alt="" className="btn img-fluid mt-5"
        onClick={prueba} />

      <img src="https://http2.mlstatic.com/gato-persa-busca-novia-libre-de-pkd-gatitos-disponibles-D_NQ_NP_862913-MLM31839317244_082019-O.webp" alt="" className="btn"
        onClick={prueba} />

      <ButtonReturn
        ruta="/roles/piso"
        btnStyles = "btn btn-warning"
        text="Ver Mesas"
      />

      <button className="btn btn-warning"
        onClick={addElement}>Enviar orden</button>

    </div>
  )
}

export default NewTable
