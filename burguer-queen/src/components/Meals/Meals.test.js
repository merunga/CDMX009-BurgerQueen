import React from 'react';
import { render, fireEvent, waitForElement, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Meals from './Meals';


test("should change the order status to ready order",()=>{
    const order =[{
    
    date:"Thu Jul 23 2020 21:39:13 ",
    cliente:"cliente",
    number:"8",
    
     }] 
 
     const { getByTestId } = render(<Meals numbers={order}/>);
     const card =getByTestId("meals");
     

     expect(screen.getByText("Orden Mesa:")).toBeInTheDocument(true);


 
 
 
   })


