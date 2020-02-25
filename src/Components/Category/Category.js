import React from 'react';
import './Category.css';

class Category extends React.Component {
    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-4 col-md-4 col-sm-1">
                        <h1>Nature</h1>
                    </div>
                    <div className = "col-lg-4 col-md-4 col-sm-1">
                        <h1>Sports</h1>
                    </div>
                    <div className = "col-lg-4 col-md-4 col-sm-1">
                        <h1>Action</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;