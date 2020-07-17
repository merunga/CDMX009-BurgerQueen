import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Roles from './Roles';
import {
   
    BrowserRouter,
   
  } from "react-router-dom"

test('renders the imgs', () => {
  const { getByAltText } = render(<BrowserRouter><Roles /></BrowserRouter>);
  const check = getByAltText("Mesero");
  expect(check).toHaveAttribute('src', 'waiter.png');
});

test('renders the imgs', () => {
    const { getByAltText } = render(<BrowserRouter><Roles /></BrowserRouter>);
    const check = getByAltText("Chef");
    expect(check).toHaveAttribute('src', 'kitchen.png');
  });

  test('should navigate to floor when link is clicked', () => {
    const { getByTestId } = render(<BrowserRouter><Roles /></BrowserRouter>);
    const link =getByTestId("Mesero");
    fireEvent.click(link);
    expect(link.closest('a')).toHaveAttribute('href', "/roles/piso"); 
  });

  
  test('should navigate to kitchen when link is clicked', () => {
    const { getByTestId } = render(<BrowserRouter><Roles /></BrowserRouter>);
    const link =getByTestId("Cocinero");
    fireEvent.click(link);
    expect(link.closest('a')).toHaveAttribute('href', "/roles/cocina"); 
  });