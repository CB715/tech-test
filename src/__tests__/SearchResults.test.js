import React from 'react';
import { render } from '@testing-library/react'
import SearchResults from '../components/SearchResults';

describe('Search Results', () => {
  const validProps = {
    results: ['string1', 'string2', 'string3']
  };
  const { asFragment } = render(<SearchResults results={validProps.results}/>);

  it('renders correctly', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});