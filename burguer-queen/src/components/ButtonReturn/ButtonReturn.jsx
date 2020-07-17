import React from 'react'
import {Link} from "react-router-dom"
const ButtonReturn = (props) => {
    return (
        
        <div>
        
        <Link to={props.ruta} className={props.btnStyles}> {props.text} </Link>
        
        </div>
    )
}

export default ButtonReturn
