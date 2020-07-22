import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { showInfoTables2, deleteOrden, edit } from '../../controllers'
import GetCheck from '../GetCheck/GetCheck'
import { Container, Navbar, Row, Col } from 'react-bootstrap'
import burgerStatus from '../../imgs/burgerStatus.svg'
import "./tableStatus.css"

const TableStatus = (index) => {
    const { id } = useParams()
    const [dataTable, setDataTable] = React.useState([])
    const [buttonCheck, setButtonCheck] = React.useState(false)

    React.useEffect(() => {
        const cb = (result) => {
            setDataTable(result)
        }
        const unsubscribe = showInfoTables2(cb, id)
        // return unsubscribe
        return () => {
            console.log('desmontando compornete')
            unsubscribe();
        }
    }, [])

    const checkResum = () => {
        setButtonCheck(true)

    }


    const deletes = async (id) => {
        try {
            await deleteOrden(id)
            console.log("borrado")

        }
        catch (error) {
            console.log(error)

        }

    }

    const orderDeliver = async (id) => {
        try {
            const resul = await edit(id, "✔ Orden entregada")
           
            return resul

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Navbar>
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Brand>
                        <button className="btn" id="btns" onClick={() => checkResum()}>Cuenta</button>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Brand>
                        {dataTable.status==="✔ Orden entregada" &&
                        <Link to="/roles/piso" className="btn" id="btns" onClick={() => deletes(id)}> Cerrar Mesa </Link>}
                        {dataTable.status!=="✔ Orden entregada" && <button  className="btn" id="btns" > Cerrar Mesa </button>}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Brand>
                        <Link to="/roles/piso" className="btn" id="btnDeliver"> Ver Mesas </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Collapse>
            </Navbar>
<br/><br/>
            <Container key={index}>
                <Row>
                    <Col className="styleCol" xs lg="5">
                        <img src={burgerStatus} alt="statusImg" />
                    </Col>
                    <Col className="styleCol1">
                        <br></br>
                        <h1 className="text-center"> Mesa: {dataTable.number} </h1>
                        <h3>Cliente: {dataTable.client}</h3>
                        <h3>Meser@: {dataTable.employ}</h3>
                        <h3>Estatus: {dataTable.status}</h3>
                        {dataTable.timeFinal !== "" && <h3>Tiempo transcurrido: {dataTable.timeFinal} min </h3>} <br />
                        {
                         dataTable.status === "Orden Lista" &&  
                        <button className="mx-auto d-block" id="btnDeliver" onClick={() => orderDeliver(id)}>Entregar orden</button>
                        }

                    </Col>
                </Row>

            </Container>
            <br></br><br></br>

            {
                buttonCheck ? <GetCheck /> : console.log("es falso")
            }


        </Container>
    )
}

export default TableStatus
