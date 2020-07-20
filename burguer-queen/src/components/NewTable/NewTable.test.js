import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTable from './NewTable';
import { showTables2 } from '../../controllers'
import { BrowserRouter, } from "react-router-dom"

 test ("displays initial clients", () => {
    const { getByAltText } = render(<BrowserRouter><NewTable /></BrowserRouter>);
    const todos = getByAltText("FirstMeal");
    fireEvent.click(todos);
    expect(todos.children.length).toBe(2);
  });


  //test('should navigate to floor when link is clicked', () => {
  //  const { getByTestId } = render(<a href="/roles/piso" data-testid= "Mesero"></a>);
  //  const link =getByTestId("Mesero");
  //  fireEvent.click(link);
  //  expect(link.closest('a')).toHaveAttribute('href', "/roles/piso"); 
  //});