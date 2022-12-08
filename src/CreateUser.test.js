import { render, screen } from '@testing-library/react';
import CreateUser from './CreateUser';
import React from 'react';

test('Render Input Element Username', () => {
    render(<CreateUser />);
    const InputElement = screen.getByLabelText("Username:");
    expect(InputElement).toBeInTheDocument();
});

test('Render Input Element Password', () => {
    render(<CreateUser />);
    const InputElement = screen.getByLabelText("Password:");
    expect(InputElement).toBeInTheDocument();
});

test('Render Input Element City', () => {
    render(<CreateUser />);
    const InputElement = screen.getByLabelText("City:");
    expect(InputElement).toBeInTheDocument();
});

test('Render Input Element Institute', () => {
    render(<CreateUser />);
    const InputElement = screen.getByLabelText("Institute:");
    expect(InputElement).toBeInTheDocument();
});

test('Render Input Element Role', () => {
    render(<CreateUser />);
    const InputElement = screen.getByLabelText("Role:");
    expect(InputElement).toBeInTheDocument();
});