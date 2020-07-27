import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Floor from './Floor';
import { showTables2 } from '../../controllers'
import { BrowserRouter, } from "react-router-dom"

test('test Function showTables2', async() => {
    const cb = (result) => {
        console.log(result)
      }
    let imagen= showTables2(cb)
    expect(typeof(imagen)).toEqual("function")

  
  })

 
//
it ("displays initial clients", async  ()  =>  {
  const { getByTestId } = render(<BrowserRouter>  <Floor/> </BrowserRouter>);
let  todos = getByTestId("allClients");
  expect(todos.children.length).toBe(0);

  await waitForElement(() => getByTestId('0'))

    todos= getByTestId("allClients")
 
    expect(todos.children.length>0).toBe(true)

});


test('should navigate to kitchen when link is clicked', async () => {
  const { getByTestId } = render(<BrowserRouter><Floor /></BrowserRouter>);
  await waitForElement(() => getByTestId('0'))
  const link =getByTestId("0");
  console.log(link)
  fireEvent.click(link);
  expect(link.closest('a')).toHaveAttribute('href', `/roles/piso/${link.id}`); 
});
 