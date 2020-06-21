import React from 'react'
import BackAllTables from './BackAllTables'

const NewTable = () => {

const prueba =() =>{
    console.log("prueba de gatos")
}


    return (
        <div>
            <ul>
            <input type="text"
            placeholder= "meser@"/>
           <input type="text"
           placeholder="Ingresar nombre del cliente"/>
           <input type="text"
           placeholder="Mesa"/>
           </ul>

        <img src="https://http2.mlstatic.com/gato-persa-busca-novia-libre-de-pkd-gatitos-disponibles-D_NQ_NP_862913-MLM31839317244_082019-O.webp" alt="" className="btn"
        onClick={prueba}/>

           <BackAllTables/>

           <button className="btn btn-warning">Enviar orden </button>
        </div>
    )
}

export default NewTable
