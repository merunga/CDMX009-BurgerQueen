import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ButtonReturn from './ButtonReturn'
import { showInfoTables2, deleteOrden, edit, editTime } from '../controllers'
import GetCheck from './GetCheck'
import AddMore from './AddMore'
import { Container } from 'react-bootstrap'


const TableStatus = (index) => {
    const { id } = useParams()
    const [dataTable, setDataTable] = React.useState([])
    const [buttonCheck, setButtonCheck] = React.useState(false)
    const [btnAddFood, setAddFood] = React.useState(false)

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

    const prueba = () => {
        setButtonCheck(true)

    }

    const showMenu = () => {
        setAddFood(true)

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
        <Container className="mx-auto d-block ">
            <nav className="d-inline-flex p-2 bd-highlight mt-5 mx-auto d-block">
                <button className="btn btn-danger" onClick={() => showMenu()}>Agregar algo a la orden</button>
                <Link to="/roles/piso" className="btn btn-danger" onClick={() => deletes(id)}> Cerrar Mesa </Link>
                <button className="btn btn-danger" onClick={() => prueba()}>Cuenta</button>
            </nav>
            {
                <div
                    key={index}>
                    <h1>Mesa: <span className="badge badge-dark">{dataTable.number}</span></h1>
                    <h4>Cliente: <span className="badge badge-dark">{dataTable.client}</span></h4>
                    <h4>Meser@: <span className="badge badge-dark">{dataTable.employ}</span></h4>
                    <h4>Estatus: <span className="badge badge-dark">{dataTable.status}</span></h4>
                    <h4>Tiempo de preparación: <span className="badge badge-dark">{dataTable.timeFinal}</span></h4>
                    <button className="btn btn-success" onClick={() => orderDeliver(id)}>Entregar orden</button>
                    <br />
                </div>
            }
            <ButtonReturn
                ruta="/roles/piso"
                btnStyles="btn btn-warning"
                text="Ver Mesas" />
            {
                buttonCheck ? <GetCheck /> : console.log("es falso")
            }

            {
                (btnAddFood) && (<div> <AddMore /></div>)
            }
        </Container>
    )
}

export default TableStatus
