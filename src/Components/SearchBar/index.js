import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="search-bar-container">
            <input
            placeholder="Search"
            className="search-bar"/>
        </div>
    )
}

export default SearchBar;