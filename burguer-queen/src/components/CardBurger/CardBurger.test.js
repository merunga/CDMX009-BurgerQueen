import React from 'react';
import { render, fireEvent, waitForElement, screen} from '@testing-library/react';
import CardBurger from './CardBurger';
import { BrowserRouter, } from "react-router-dom"
import { breackfast, burgersTime } from "../../utils/menus.js";

test('render the component ', () => {

  let  {getByTestId}=  render (<CardBurger/>)
  let card= getByTestId("cardOrden")
  expect(card).toBeInTheDocument();
    
})

test('render the menu', async () =>{

  const { getByTestId } = render(<BrowserRouter>  <CardBurger element="Hamburguesa Simple"
  options= {["Carne de Res","Carne de Pollo","Vegetariana"]}
  /> </BrowserRouter>);
 // let  todos = getByTestId("cardMenu");

 //   fireEvent.click(todos)
    let button=document.getElementById("dropdown-basic-button")
    fireEvent.click(button)
    await waitForElement(() => getByTestId("0"))
    //expect(button.closest('div')).toHaveAttribute('data-testid', "menuOptions");
 
  //
    //  cards= getByTestId("menuOptions")
   //
   expect(screen.getByText("Vegetariana")).toBeInTheDocument(true)
  //expect(screen.button.children.length).toBe(3);

})

