import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Ready from './Ready';

test("should be a button", () => {
    let { getByRole } = render(<Ready />);
    let check = getByRole("button");
    expect(check).toBeInTheDocument();
  });

  test("should have list text", () => {
    let { getByText } = render(<Ready />);
    let check = getByText("Lista");
    expect(check).toBeInTheDocument();
  });

  test("should change the order status to ready order", async()=>{
   const order =[{
   cliente:"cliente",
   date:"Thu Jul 23 2020 21:39:13 ",
   employ: "mesero",
   number:"8",
   orden:[{ 
    id: 1,
    localId:"615a85",
    precio:15,
    producto: "Agua de frutas"}],
   status:"Preparando",
   timeFinal:"",
   timeOut:"",
   timePrep:1299 }] 
    
    const { getByTestId } = render(<Ready numbers={order}/>);
    const button =getByTestId("ready");
    fireEvent.click(button)
    expect(button).toBeInTheDocument(true)

    
    
  })