import React from 'react';
import { withRouter, BrowserRouter } from "react-router-dom";
import { render, fireEvent, waitForElement,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterUser from './RegisterUser';

test("should have input with type email", async() => {
    const {getByTestId,getByPlaceholderText} = render(<BrowserRouter><RegisterUser/></BrowserRouter>)
    const initial = getByTestId("entrar");
    fireEvent.click(initial)
    waitForElement(() => getByTestId("initialText"))
    const input = getByPlaceholderText('Ingresa tu email');
        expect(input).toBeInTheDocument();
        expect(input.type).toBe('email');

});

test("should have input with type password", async() => {
    const {getByTestId,getByPlaceholderText} = render(<BrowserRouter><RegisterUser/></BrowserRouter>)
    const initial = getByTestId("entrar");
    fireEvent.click(initial)
    waitForElement(() => getByTestId("initialText"))
    const input = getByPlaceholderText('Ingresa tu contraseña');
        expect(input).toBeInTheDocument();
        expect(input.type).toBe('password');

});

test("should have input for boss password", async() => {
    const {getByTestId,getByPlaceholderText} = render(<BrowserRouter><RegisterUser/></BrowserRouter>)
    const initial = getByTestId("entrar");
    fireEvent.click(initial)
    waitForElement(() => getByTestId("initialText"))
    const btnRegister = getByTestId("register")
    fireEvent.click(btnRegister)
    waitForElement(() => getByPlaceholderText("Contraseña del gerente"))

    const input = getByPlaceholderText("Contraseña del gerente");
        expect(input).toBeInTheDocument();
        expect(input.type).toBe('password');

});

//   it('debería contener un botón', () => {
//     // ...
//   });

//   it('debería mostrar botón como deshabilitado con campos vacios', () => {
//     const { getByText } = render(<SignIn />);
//     const btn = getByText('Sign in!');
//     expect(btn.disabled).toBe(true);
//   });

//   it('debería mostrar botón como habilitado con campos NO vacios', () => {
//     const { getByText, getByPlaceholderText } = render(<SignIn />);
//     const input = getByPlaceholderText('Email');
//     const btn = getByText('Sign in!');

//     expect(btn.disabled).toBe(true);

//     // userEvent.type(input, 'lupo@laboratoria.la');
//     fireEvent.change(input, { target: { value: 'blah' }});

//     expect(btn.disabled).toBe(false);

//     // btn.click();
//     userEvent.click(btn);

//     // ...
//   });
// });