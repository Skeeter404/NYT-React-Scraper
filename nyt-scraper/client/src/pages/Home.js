import React from 'react';
import { Card, CardTitle, Row, Col, Button, Container } from 'react-materialize';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container className="center-align">
        <br/><br/>
            <Row>
                <Col s={12}>
                <h1>New York Times Article Finder</h1>
                <h5>Search the NYT Database for specific topics, and save your favorite articles for later viewing!</h5>
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col s={12} l={6}>
                    <Card className="small" header={<CardTitle image='img/nytFont.png'></CardTitle>}>
                        <Link to="/search">
                            <Button waves="light" className="btn-large">Search Articles</Button>
                        </Link>
                    </Card>
                </Col>

                <Col s={12} l={6}>
                    <Card className="small" header={<CardTitle image='img/articles.png'></CardTitle>}>
                        <Link to="/saved">
                            <Button waves="light" className="btn-large">View Saved Articles</Button>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;