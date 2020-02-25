import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Category from '../Category/Category';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Category />
            </div>
        );
    }
}

export default App;