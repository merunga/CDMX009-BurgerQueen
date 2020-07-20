import React from 'react'
import {Link} from "react-router-dom"
const ButtonReturn = (props) => {
    return (
        
        <div>
                 <Link data-testid="anyButton" to={props.ruta} className={props.btnStyles}> {props.text} </Link>
        </div>
    )
}

export default ButtonReturn
