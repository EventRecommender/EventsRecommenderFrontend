import { render, screen } from '@testing-library/react';
import Recommendedactivities from './Recommendedactivities';
import React from 'react';

test('Render List', () => {
  render(<Recommendedactivities />);
  const listElement = screen.getAllByTestId('list');
  expect(listElement).toBeInTheDocument();
});