import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';
import {
   
    BrowserRouter,
   
  } from "react-router-dom"

test('renders learn react link', () => {
  const { getByRole } = render(<BrowserRouter><Login /></BrowserRouter>);
  const check = getByRole("img");
  expect(check).toBeInTheDocument();
});
test('renders learn react link', () => {
    const { getByRole } = render(<BrowserRouter><Login /></BrowserRouter>);
    const check = getByRole("link");
    expect(check).toBeInTheDocument();
  });

  test('should navigate to ... when link is clicked', () => {
    const { getByText } = render(<a href="/roles">Entrar</a>);
    const link = getByText('Entrar');
    fireEvent.click(link);
    expect(link.closest('a')).toHaveAttribute('href', "/roles");
  });