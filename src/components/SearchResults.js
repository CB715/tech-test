import React from 'react';
import PropTypes from 'prop-types'

import '../styles/searchResults.css'

const SearchResults = ({ results }) => {
  if (!results?.length) {
    return <p className='search-results__no-results'>No results</p>
  } else {
    return (
      <div className='search-results'>
        <div className='search-results__text'>
          <p>Search Results:</p>
        </div>
        <div className='search-results__images'>
        {results.map((image) => (
          <img className="card-image" src={image} alt="spaceImage" />
        ))}
        </div>
      </div>
    )
  };
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  )
};

export default SearchResults
