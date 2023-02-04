import React, { useState } from 'react';
import '../styles/search.css';
import getImages from '../requests/getImages';

const Search = ({ setSearchResults }) => {
    const [value, setValue] = useState();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchResults(getImages(value));
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
    
        <button className='search-form__button' type='submit'>
          Search
        </button>
      </form>
    </div> 
    );
};

export default Search;
