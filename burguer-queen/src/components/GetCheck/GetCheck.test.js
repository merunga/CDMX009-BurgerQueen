import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GetCheck from './GetCheck';
import { showInfoTables } from "../../controllers";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 'FCKFCS5LrLkKGMbQ8UCp',
  }),
}));

test('renders learn react link', async () => {
  const { getByRole, getByTestId } = render(<GetCheck />);
  const btnCheck= getByTestId("btnCheck")
  fireEvent.click(btnCheck)
  await waitForElement(() => getByTestId("modalCheck"));
  const check = getByRole("modal");
  expect(check).toBeInTheDocument();
});