import React from 'react'
import {DropdownButton, Dropdown, Container} from 'react-bootstrap'
const shortid = require('short-id');

const CardBurger = ({id,element,options,price,addToMenu, newarray, setOrden}) => {

const addToMenuType = ({
  id,
  element, 
  price, 
  newarray, 
  setOrden,
  option,
})=>{
  if(id === 5 || id === 6){
    
  const targ = {
    producto: element, 
    precio: price,
    id: option.id,
    localId: shortid.generate(),
    type: option.op   
  }

  newarray.push(targ)
  setOrden(previousOrden => [...previousOrden, ...newarray])
  console.log(newarray)
  return newarray
}
}


  return (
    <Container data-testid="cardOrden">
          <div className="card" >
      <div className="card-body">
        <h5 className="card-title" >{element}</h5>       
        {(element === "Hamburguesa Simple" || element=== "Hamburguesa doble") &&
            <div key={shortid.generate()} >
            <DropdownButton id="dropdown-basic-button" title="Opciones" data-testid="cardMenu">
            {options.map((option, idx) => (
              <Dropdown.Item data-testid="menuOptions"
              data-testid={idx}
              key = {idx}
              onClick={()=>addToMenuType({
                  id,
                  element,
                  price, 
                  newarray, 
                  setOrden, 
                  option,
                })}
              >
                {option.op}
              </Dropdown.Item>
            ))}
          </DropdownButton>            
            </div>
        }
       <p className="card-text">$ {price}</p>
       {(element !== "Hamburguesa Simple" && element!== "Hamburguesa doble") &&
        <button className="btn btn-primary"
          onClick={addToMenu}>Añadir al menu </button>}
      </div>
    </div>
    </Container>


  )
}

export default CardBurger
