import React from 'react'

const CardBurger = (props) => {
  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{props.element}</h5>
        <p className="card-text">$ {props.price}</p>
        <button className="btn btn-primary"
          onClick={props.addToMenu}>Añadir al menu </button>
      </div>
    </div>

  )
}

export default CardBurger
