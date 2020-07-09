import React from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap'
const shortid = require('short-id');

const addToMenuType = ({
  element, 
  price, 
  newarray, 
  setOrden,
  option,
})=>{
  if(element === "Hamburguesa Simple" || element ==="Hamburguesa doble"){
    
  const targ = {
    producto: element, 
    precio: price,
    id: shortid.generate(), 
    type: option    
  }

  newarray.push(targ)
  setOrden(previousOrden => [...previousOrden, ...newarray])
  console.log(newarray)
}
}

const CardBurger = ({element,options,price,addToMenu, newarray, setOrden, orden}) => {
  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{element}</h5>       
        {(element === "Hamburguesa Simple" || element=== "Hamburguesa doble") &&
            <div key={shortid.generate()} >
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                {options.map((option, idx) => (
                  <Dropdown.Item 
                    key={idx} 
                    onClick={()=>addToMenuType({
                      element,
                      price, 
                      newarray, 
                      setOrden, 
                      option,
                    })}
                  >
                    {option}
                  </Dropdown.Item>
                ))}
              </DropdownButton>            
            </div>
        }
       <p className="card-text">$ {price}</p>
        <button className="btn btn-primary"
          onClick={addToMenu}>Añadir al menu </button>
      </div>
    </div>

  )
}

export default CardBurger
