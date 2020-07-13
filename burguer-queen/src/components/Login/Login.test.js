import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('renders learn react link', () => {
  const { getByRole } = render(<Login />);
  const check = getByRole("img");
  expect(check).toBeInTheDocument();
});