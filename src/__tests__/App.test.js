import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {

  it('renders App component', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the logo', () => {
    render(<App />);
    const nasaLogo = screen.getByTestId('nasaLogo');

    expect(nasaLogo).toBeInTheDocument();
    expect(nasaLogo.tagName).toBe('IMG');
    expect(nasaLogo.classList).toContain('nasa-logo');
  });

});