import React from 'react';
import './Header.css';

// created a header
function Header() {
    return (

        <header className="header">
            <h2>Employee Directory</h2>
            <h6>Click on the carrot beside Name to sort by heading or use the search box to narrow your results.</h6>
        </header>
    
    )
}

export default Header;