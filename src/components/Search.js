import React, { useState } from 'react';
import PropTypes from 'prop-types'

import '../styles/search.css';
import getImages from '../requests/getImages';

const Search = ({ setSearchResults }) => {
    const [value, setValue] = useState();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
    };

    return (
    <div>
      <form className='search-form' onSubmit={handleSubmit}>
        
        <input 
          className='search-form__input-box' 
          type='text' 
          placeholder='Search' 
          onChange={(e) => setValue(e.target.value)}
        />
    
        <button className='search-form__button' type='submit' data-testid='button'>
          Search
        </button>
      </form>
    </div> 
    );
};

Search.propTypes = {
  setSearchResults: PropTypes.func,
};

Search.defaultProps = {
  setSearchResults: () => [],
}

export default Search;
