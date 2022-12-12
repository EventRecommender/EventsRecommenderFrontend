import { render, screen } from '@testing-library/react';
import CreatedActivities from './CreatedActivities';
import React from 'react';

test('Render List', () => {
  render(<CreatedActivities />);
  const listElement = screen.getByTestId('list');
  expect(listElement).toBeInTheDocument();
});