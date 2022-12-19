import { render, screen } from '@testing-library/react';
import Userlist from '../Components/old/Userlist';
import React from 'react';

test('Render List', () => {
  render(<Userlist />);
  const listElement = screen.getByTestId('list');
  expect(listElement).toBeInTheDocument();
});