import { render, screen } from '@testing-library/react';
import Admin from './Admin';
import React from 'react';

test('Render Buttongroup', () => {
  render(<Admin />);
  const ButtonElement = screen.getByTestId('ButtonGroupA');
  expect(ButtonElement).toBeInTheDocument();
});