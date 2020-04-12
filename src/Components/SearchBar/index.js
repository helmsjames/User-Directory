import React, {useState} from 'react';
import {connect} from 'react-redux';
import {store} from '../../store/createStore';
import './SearchBar.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        store.dispatch({type: 'GET_SEARCH_TERM', payload: searchTerm})
        setSearchTerm('');
    }

    const handleChange = (event) => {
        console.log('changed')
        setSearchTerm(event.target.value)
    }

    return (
        <div className="search-bar-container">
            <input
            placeholder="Employee last name"
            className="search-bar"
            id="search-input"
            onChange={handleChange}
            value={searchTerm}
            />
            <button onClick={handleSubmit} type="submit">
                Search
            </button>
        </div>
    )
}

export default connect()(SearchBar);