import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import Search from "../components/Search";

describe('Search', () => {
const validProps = {
  setSearchResults: jest.fn()
}

    it('renders correctly', () => {
      const { asFragment } = render(<Search setSearchResults={validProps.setSearchResults} />);
      
      expect(asFragment()).toMatchSnapshot();
  });

  it('calls function when button fired', async() => {
    render(<Search setSearchResults={validProps.setSearchResults} />);
    const button = screen.getByTestId('button')
    await fireEvent.click(button);

    expect(validProps.setSearchResults).toHaveBeenCalled();
  });

  it('displays button', () => {
    render(<Search setSearchResults={validProps.setSearchResults} /> );
    const button = screen.getAllByRole('button');

    expect(button).toHaveLength(1);
  });
});