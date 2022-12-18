import { render, screen } from '@testing-library/react';
import Student from './Student';
import React from 'react';

test('Render Buttongroup', () => {
  render(<Student />);
  const ButtonElement = screen.getByTestId('ButtonGroupS');
  expect(ButtonElement).toBeInTheDocument();
});