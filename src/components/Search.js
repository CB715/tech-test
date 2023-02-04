import react, { useState } from 'react';
import '../styles/search.css';

const Search = () => {
    const [value, setValue] = useState();
    return (
    <>
    <form className='search-form'>
    
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
    </> 
    );
};

export default Search;
