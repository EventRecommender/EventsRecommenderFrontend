import { render, screen } from '@testing-library/react';
import CreateActivity from './CreateActivity';
import React from 'react';

test('Render Input Element Title', () => {
    render(<CreateActivity />);
    const InputElement = screen.getByLabelText("Title:");
    expect(InputElement).toBeInTheDocument();
});

test('Render Input Element Host', () => {
    render(<CreateActivity />);
    const InputElement = screen.getByLabelText("Host:");
    expect(InputElement).toBeInTheDocument();
});

test('Render Input Element City', () => {
    render(<CreateActivity />);
    const InputElement = screen.getByLabelText("City:");
    expect(InputElement).toBeInTheDocument();
});

test('Render Input Element Date', () => {
    render(<CreateActivity />);
    const InputElement = screen.getByLabelText("Date:");
    expect(InputElement).toBeInTheDocument();
});

test('Render Input Element Image', () => {
    render(<CreateActivity />);
    const InputElement = screen.getByLabelText("Image:");
    expect(InputElement).toBeInTheDocument();
});

test('Render Input Element URL', () => {
    render(<CreateActivity />);
    const InputElement = screen.getByLabelText("URL:");
    expect(InputElement).toBeInTheDocument();
});

test('Render Input Element Description', () => {
    render(<CreateActivity />);
    const InputElement = screen.getByLabelText("Description:");
    expect(InputElement).toBeInTheDocument();
});

test('Render Input Element Tag', () => {
    render(<CreateActivity />);
    const InputElement = screen.getByLabelText("Tag:");
    expect(InputElement).toBeInTheDocument();
});