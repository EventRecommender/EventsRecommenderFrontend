import { render, screen } from '@testing-library/react';
import Activitylist from './Activitylist';
import React from 'react';

test('Render List', () => {
  render(<Activitylist />);
  const listElement = screen.getByTestId('list');
  expect(listElement).toBeInTheDocument();
});