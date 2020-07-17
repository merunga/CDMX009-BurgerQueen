import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ButtonReturn from '../ButtonReturn/ButtonReturn'
import { showInfoTables2, deleteOrden, edit } from '../../controllers'
import GetCheck from '../GetCheck/GetCheck'
import { Container, Card } from 'react-bootstrap'
import back from '../../imgs/back.jpg'
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
        <Container id="tableStatus" className="mx-auto d-block ">
            <nav className="d-inline-flex p-2 bd-highlight mt-5 mx-auto d-block">
              <button className="btn btn-danger" onClick={() => checkResum()}>Cuenta</button>
                <Link to="/roles/piso" className="btn btn-danger" onClick={() => deletes(id)}> Cerrar Mesa </Link>
                <ButtonReturn
                ruta="/roles/piso"
                btnStyles="btn btn-warning"
                text="Ver Mesas" />
            </nav>
            
                <div
                    key={index}>
                    

                    <Card className="bg-dark text-white">
  <Card.Img src={back} alt="Card image" width="34" height="436"/>
  <Card.ImgOverlay>
    <h1 className= "text-dark text-center">Status Mesa: {dataTable.number} </h1>
    <Card.Body className= "text-dark text-center">
    <h4>Cliente: {dataTable.client}</h4>
                    <h4>Meser@: {dataTable.employ}</h4>
                    <h4 className= "text-danger text-center">Estatus: {dataTable.status}</h4>
                  { dataTable.timeFinal !=="" && <h4 className="text-success">Tiempo de preparación: {dataTable.timeFinal} min </h4> } <br/>
                  <button className="btn btn-success" onClick={() => orderDeliver(id)}>Entregar orden</button>
    </Card.Body>
    
  </Card.ImgOverlay>
</Card>

<br></br><br></br><br></br>

                </div>
               
            
            
            {
                buttonCheck ? <GetCheck /> : console.log("es falso")
            }

           
        </Container>
    )
}

export default TableStatus
