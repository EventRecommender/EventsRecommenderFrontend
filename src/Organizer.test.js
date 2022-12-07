import { render, screen } from '@testing-library/react';
import Organizer from './Organizer';
import React from 'react';

test('Render Buttongroup', () => {
  render(<Organizer />);
  const ButtonElement = screen.getByTestId('ButtonGroupO');
  expect(ButtonElement).toBeInTheDocument();
});