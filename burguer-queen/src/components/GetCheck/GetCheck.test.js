import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GetCheck from './GetCheck';
import { showInfoTables } from "../../controllers";

test('renders learn react link',() => {
   
     const { getByRole, getByTestId } = render(<GetCheck {id ="FCKFCS5LrLkKGMbQ8UCp" }/>);
    const btnCheck= getByTestId("btnCheck")
    fireEvent.click(btnCheck)
    await waitForElement(() => getByTestId("modalCheck"));
  const check = getByRole("modal");
    expect(check).toBeInTheDocument();
  });