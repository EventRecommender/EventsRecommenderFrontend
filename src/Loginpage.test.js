import { render, screen } from '@testing-library/react';
import Login from './Loginpage';
import React from 'react';
import userEvent from '@testing-library/user-event';

test('Renders login button', () => {
  render(<Login />);
  const ButtonElement = screen.getByDisplayValue("Login");
  expect(ButtonElement).toBeInTheDocument();
});

test('Renders Username input', () => {
  render(<Login />);
  const InputElement = screen.getByDisplayValue("username");
  expect(InputElement).toBeInTheDocument();
});

test('Renders password input', () => {
  render(<Login />);
  const InputElement = screen.getByDisplayValue("password");
  expect(InputElement).toBeInTheDocument();
});

test('Render Logout button', () => {
  render(<Login />);
  const InputElement = screen.getByDisplayValue("username");
  InputElement.setSelectionRange(0, 8);
  userEvent.type(InputElement, '{backspace}Student');
  userEvent.click(screen.getByDisplayValue("Login"));

  const ButtonElement = screen.getByTestId("LogoutButton");
  expect(ButtonElement).toBeInTheDocument();
});

test('Render create new user button', () => {
  render(<Login />);
  const ButtonElement = screen.getByTestId("UserCreate");
  expect(ButtonElement).toBeInTheDocument();
});

test('Render BackButton', () => {
  render(<Login />);
  userEvent.click(screen.getByTestId("UserCreate"));
  const ButtonElement = screen.getByTestId("BackButton");
  expect(ButtonElement).toBeInTheDocument();
});