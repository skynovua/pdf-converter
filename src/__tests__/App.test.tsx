import { render, screen } from '@testing-library/react';
import App from '../App';
import { expect, it, describe } from 'vitest';

describe('App', () => {
  it('renders PDF Converter title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PDF Converter/i);
    expect(titleElement).toBeInTheDocument();
  });
});