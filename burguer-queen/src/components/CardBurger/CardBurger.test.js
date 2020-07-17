import React from 'react';
import { render, fireEvent, waitForElement, getByTestId } from '@testing-library/react';
import CardBurger from './CardBurger';
import { BrowserRouter, } from "react-router-dom"
import { breackfast, burgersTime } from "../../utils/menus.js";

test('render the component ', () => {

  let  {getByTestId}=  render (<CardBurger/>)
  let card= getByTestId("cardOrden")
  expect(card).toBeInTheDocument();
    
})
