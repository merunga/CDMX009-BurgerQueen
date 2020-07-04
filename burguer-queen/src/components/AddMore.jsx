// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { Container, Row, Col } from 'react-bootstrap'
// import ImgMenus from './ImgMenus'
// import breakfast from '../imgs/breakfast.png'
// import burgerTime from '../imgs/burgerTime.svg'
// import { breackfast, burgersTime } from '../utils/menus.js'
// import CardBurger from './CardBurger'
// import { showInfoTables } from '../controllers/index.js'


// function AddMore() {
//   const { id } = useParams()
//   const [cardDinner, setCartDinner] = React.useState(false)
//   const [cardBreakfast, setCardBreacfast] = React.useState(false)
//   const [orders, setOrders] = React.useState([])
//   const [prices, setPrices] = React.useState([])

//   const cartAMostrar = ((cardDinner && burgersTime) || (cardBreakfast && breackfast));

//   const showMenu = (isDinner) => {
//     console.log("Funciones del menu")
//     setCartDinner(isDinner)
//     setCardBreacfast(!isDinner)
//   }

//   const otra = () => {
//     console.log("algo en el menu")
//   }

//   const add = async () => {
//     try {
//       const infOrden = await showInfoTables(id)
//       const products = infOrden.orden
//       console.log(products)
//       setOrders(products)
//       let total = infOrden.price.reduce((a, b) => a + b, 0);
//       console.log(total)
//       setPrices(total)
//     }
//     catch (error) {
//       console.log(error)
//     }

//   }

//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col><ImgMenus src={breakfast} action={() => showMenu(false)} /></Col>
//           <Col><ImgMenus src={burgerTime} action={() => showMenu(true)} /></Col>
//         </Row>

//         {cartAMostrar && cartAMostrar.map(item => (
//           <div key={item.id}>
//             <CardBurger element={item.product} price={item.precio} addToMenu={() => otra()} />
//           </div>

//         ))}
//         <button className="btn btn-warning"
//           onClick={() => add()}>Agregar a la orden </button>
//         {console.log(orders, prices)}
//       </Container>
//     </div>
//   )
// }

// export default AddMore
