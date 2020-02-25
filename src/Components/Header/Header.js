import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className = "jumbotron">
                <h1 className = "title">Photo Gallery</h1>
            </div>
        );
    }
}

export default Header;