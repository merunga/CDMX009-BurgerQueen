import React from 'react'
import breakfast from '../imgs/breakfast.png'
import burgerTime from '../imgs/burgerTime.svg'
import iconDelete from '../imgs/iconDelete.png'
import ButtonReturn from './ButtonReturn'
import { breackfast, burgersTime } from '../utils/menus.js'
import ImgMenus from './ImgMenus'
import Form from './Form'
import CardBurger from './CardBurger'
import { createTable } from '../controllers'
import { Container,Row, Col } from 'react-bootstrap'
import PreViewOrder from './PreViewOrder'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const NewTable = (props) => {
  const [waiter, setWaiter] = React.useState("")
  const [client, setClient] = React.useState("")
  const [table, setTable] = React.useState("")
  const [cartDinner, setCartDinner] = React.useState(false)
  const [cardBreakfast, setCardBreacfast] = React.useState(false)
  
 
  const [date, setDate] = React.useState("")

  const[real, setReal]=React.useState(false)

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
      const data = await createTable({ client, employ: waiter, number: table, orden:props.orden, date });
      console.log(data)
      setClient('')
      setTable('')
      setWaiter('')
      props.setOrden([])
      
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

  const addSomething = (item) => {
    const newarray = []
    const arrayTotal = []
    const targ = {
      producto: item.product,
      precio: item.precio,
      id: item.id,
    }
    
    newarray.push(targ)
    props.setOrden([...props.orden, ...newarray])
    console.log(props.orden)
    setReal(true)
   
    
    let dates = new Date();
    dates += Date.now();
    const date1 = dates.slice(0, 25);
    setDate(date1)
  }

  const deleteItem =(id, orden) =>{
    console.log("voy a borrar")
    const arrayFiltrado = orden.filter(item => item.id !== id)
    props.setOrden(arrayFiltrado)
    
  }

  const cartAMostrar = ((cartDinner && burgersTime) || (cardBreakfast && breackfast));
  return (
    
    <div className="text-center">
   
      <ul className="mt-5 ml-5 mr-5">
        <Form
          types="text"
          text="Meser@"
          changeAction={e => setWaiter(e.target.value)}
          val={waiter} />
        <Form
          text="Ingresar nombre del cliente"
          changeAction={e => setClient(e.target.value)}
          val={client} />
        <Form
          types="number"
          text="Ingrese número de mesa"
          changeAction={e => setTable(e.target.value)}
          val={table} />
      </ul>
      <ButtonReturn
      ruta="/roles/piso"
      btnStyles="btn btn-warning"
      text="Ver Mesas"/>
      <div>
      <Row>
      <Col><ImgMenus
      src={burgerTime}
      action={showDinnerOrBreakfast(true)} />
      </Col>
      <Col>
      <ImgMenus
      src={breakfast}
      action={showDinnerOrBreakfast(false)} />
      </Col>
      </Row>     
      </div>
      <div>
        {(!cartAMostrar) && (
          <img src="https://http2.mlstatic.com/gato-persa-busca-novia-libre-de-pkd-gatitos-disponibles-D_NQ_NP_862913-MLM31839317244_082019-O.webp" alt="" className="btn"
            onClick={prueba} />
        )}
        <Container>
        <Row>
        <Col className="md-6">{cartAMostrar && cartAMostrar.map(item => (
        <CardBurger  key={item.id} element={item.product} price={item.precio} addToMenu={() => addSomething(item)}/>                   
        ))}
        </Col>
        <Col >
         <PreViewOrder/>
{real&&
         <Card className= "center-block" style={{ width: '18rem' }}>
  <Card.Header>Alimentos Añadidos </Card.Header>
  <ListGroup variant="flush">
  {real&& <div className="text-dark font-weight-bold">{props.orden.map(items=>(
          <ListGroup.Item key={items.id}>{items.producto}<img src= {iconDelete} width="25" height="25" onClick={()=> deleteItem(items.id, props.orden)}/> </ListGroup.Item>
        ))}</div>
       }

   
  </ListGroup>
  <button className="btn btn-warning"
        onClick={addElement}>Enviar orden </button>
</Card>
}



       
        </Col>
        </Row>
        </Container>
      </div>
     
      
    </div>
  )
}

export default NewTable
