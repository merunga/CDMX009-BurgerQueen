import React from 'react';
import { render } from '@testing-library/react';
import ButtonReturn from './ButtonReturn';
import { BrowserRouter, } from "react-router-dom"

test('renders a link', () => {
    const {getByRole} = render(<BrowserRouter><ButtonReturn /></BrowserRouter>);
    const check = getByRole("link");
    expect(check).toBeInTheDocument();
  });