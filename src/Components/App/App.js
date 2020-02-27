import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Page from '../Page/Page';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Page />
            </div>
        );
    }
}

export default App;