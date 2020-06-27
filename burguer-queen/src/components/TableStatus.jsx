import React from 'react'
import { useParams } from 'react-router-dom'
import ButtonReturn from './ButtonReturn'
import { showInfoTables } from '../controllers'
import GetCheck from './GetCheck'

const TableStatus = (index) => {
    const { id } = useParams()
    //console.log(id)
    const [dataTable, setDataTable] = React.useState([])
     React.useEffect( () => {
         
        const getTables =async ()=>{
            try{
        const infoTable = await showInfoTables(id)
        setDataTable(infoTable)

            }
            catch(error){
                console.log(error)

            }

        }
        getTables()
      
    }, [])


    const [buttonCheck, setButtonCheck] = React.useState(false)

    const prueba=()=>{
        setButtonCheck(true)
    }

    return (
        <div>
        
        {
              
            <div 
            key={index}>
           
           <h1>Mesa: <span className="badge badge-dark">{dataTable.number}</span></h1>
           <h4>Cliente: <span className="badge badge-dark">{dataTable.client}</span></h4>
           <h4>Meser@: <span className="badge badge-dark">{dataTable.employ}</span></h4>
           
           <h4>Estatus: <span className="badge badge-dark">{dataTable.status}</span></h4>
                     
      
             </div>
 
             
        }
        
        
                  

            <button className="btn btn-danger">Agregar algo a la orden</button>
            <button className="btn btn-danger">Cerrar mesa</button>
            <button className="btn btn-danger" onClick={()=>prueba()}  >Cuenta</button>
            
            <ButtonReturn
            ruta = "/roles/piso"
            btnStyles= "btn btn-warning"
            text = "Ver Mesas"/>
            
           
            {
                buttonCheck ? <GetCheck/> :console.log("es falso")
            }
        </div>
    )
}

export default TableStatus
