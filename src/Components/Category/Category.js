import React from 'react';
import './Category.css';
import {Container, Row, Col} from 'react-bootstrap';

class Category extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Category;