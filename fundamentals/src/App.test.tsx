import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render two types of component', () => {
  render(<App />);
  const classComponentItem = screen.getByText(/Hello from Header as a Class Component/i);
  const functionalComponentItem = screen.getByText(/Hello from Header as a Function Component/i);
  expect(classComponentItem).toBeInTheDocument();
  expect(functionalComponentItem).toBeInTheDocument();
});
