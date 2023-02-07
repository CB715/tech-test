import React from "react";

import '../styles/searchResults.css'

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>
  } else {
    return (
      <div className='search-results'>
        <p>Search Results:</p>
        <img src='https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' 
        alt='placeholder'/>
      </div>
    )
  }
};

export default SearchResults
