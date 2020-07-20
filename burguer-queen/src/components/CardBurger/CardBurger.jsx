import React from 'react'
import {DropdownButton, Dropdown, Container} from 'react-bootstrap'
const shortid = require('short-id');

const CardBurger = ({element,options,price,addToMenu, newarray, setOrden}) => {

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
              <DropdownButton id="dropdown-basic-button" title="Opciones">
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
       {(element !== "Hamburguesa Simple" && element!== "Hamburguesa doble") &&
        <button className="btn btn-primary"
          onClick={addToMenu}>Añadir al menu </button>}
      </div>
    </div>
    </Container>


  )
}

export default CardBurger
