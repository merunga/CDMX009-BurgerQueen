import React from 'react';
import { render, fireEvent, waitForElement, screen } from '@testing-library/react';
import NewTable from './NewTable';
import { BrowserRouter, } from "react-router-dom"

  
test("render the component ", () => {
  let { getByTestId } = render( <BrowserRouter><NewTable 
    orden={["Carne de Res", "Carne de Pollo", "Vegetariana"]}/></BrowserRouter>);
  let allComponent = getByTestId("newTableComponent");
  expect(allComponent).toBeInTheDocument();
});

test("render the meal's menu", async () => {
  const { getByTestId } = render(
    <BrowserRouter>
    <NewTable
     orden={["Carne de Res", "Carne de Pollo", "Vegetariana"]}
    
      /></BrowserRouter>);

  let button = getByTestId("burgersMenu");
  fireEvent.click(button);
  await waitForElement(() => getByTestId("Cerveza Artesanal"));

  expect(screen.getByText("Cerveza Artesanal")).toBeInTheDocument(true);
 // expect(screen.button.nextSibling.children.length).toBe(3);
});

test("render the meal's menu items", async () => {
  const { getByTestId } = render(
    <BrowserRouter>
    <NewTable
     orden={["Carne de Res", "Carne de Pollo", "Vegetariana"]}
    
      /></BrowserRouter>);

  let button = getByTestId("burgersMenu");
  fireEvent.click(button);
  await waitForElement(() => getByTestId("Cerveza Artesanal"));
let conteinerMenu= getByTestId("boxMenu")
  //expect(screen.getByText("Cerveza Artesanal")).toBeInTheDocument(true);
 expect(conteinerMenu.children.length==10).toBe(true);
 
});

test("render the breakfast's menu", async () => {
  const { getByTestId } = render(
    <BrowserRouter>
    <NewTable
     orden={["Café Americano", "Café con leche", "Jugo de frutas"]}
     /></BrowserRouter>);
  let button = getByTestId("breakfastMenu");
  fireEvent.click(button);
  await waitForElement(() => getByTestId("Café Americano"));
  expect(screen.getByText("Jugo de frutas")).toBeInTheDocument(true);
});

test("render the breakfast's menu items", async () => {
  const { getByTestId } = render(
    <BrowserRouter>
    <NewTable
     orden={["Café Americano", "Café con leche", "Jugo de frutas"]}
    
      /></BrowserRouter>);

  let button = getByTestId("breakfastMenu");
  fireEvent.click(button);
  await waitForElement(() => getByTestId("Jugo de frutas"));
let conteinerMenu= getByTestId("boxMenu")
 expect(conteinerMenu.children.length==7).toBe(true);
 
});

test('renders a link', () => {
  const {getByRole} = render(<BrowserRouter><NewTable
    orden={["Café Americano", "Café con leche", "Jugo de frutas"]} /></BrowserRouter>);
  const tableNumber = getByRole("spinbutton");
  expect(tableNumber.type).toBe("number");
});
  //test('should navigate to floor when link is clicked', () => {
  //  const { getByTestId } = render(<a href="/roles/piso" data-testid= "Mesero"></a>);
  //  const link =getByTestId("Mesero");
  //  fireEvent.click(link);
  //  expect(link.closest('a')).toHaveAttribute('href', "/roles/piso"); 
  //});
  test("render the added items", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
      <NewTable
       orden={["Café Americano", "Café con leche", "Jugo de frutas"]}
        /></BrowserRouter>);
  
    let button = getByTestId("breakfastMenu");
    fireEvent.click(button);
    await waitForElement(() => getByTestId("Jugo de frutas"));
  let conteinerMenu= getByTestId("addItem")
   expect(conteinerMenu.children.length>0).toBe(true);
   
  });