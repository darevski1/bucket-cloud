import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar ';
import { hot } from "react-hot-loader";
import { Container, Col, Row, Button, Form, Tabs, Tab } from 'react-bootstrap';
// import { stockData } from "./data/location.js";


const App = () => {

    const [data, setData] = useState([]);
    const getData = () => {
        fetch("./data.json",
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'method': 'get',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <div className="App">
            <Navbar />
            <Container>
                <Row className="heading">
                    <Col className="space_between">
                        <h4>All Bucket - 2</h4>
                        <Button variant="primary">Create new Bucket</Button>{' '}
                    </Col>
                </Row>
                <Row className="head_bucket">
                    <Col sm={8}>Name</Col>
                    <Col sm={4}>Location</Col>
                </Row>
                <Row className="bucket_list">
                    <Col sm={8}>Easy cloud solution</Col>
                    <Col sm={4}>Skopje, Macedonia</Col>
                </Row>
            </Container>
            <Container>
                <Row className="heading">
                    <Col className="space_between">
                        <h4>Create new bucket</h4>
                    </Col>
                </Row>
                <Row className="head_bucket">
                    <Col sm={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Bucket name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter name for your new bucket" />
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Bucket Location:</Form.Label>
                            <Form.Control as="select" custom>
                                {data.map((d, i) => {
                                    return (
                                        <option key={i}>{d.location}</option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={12}>
                        <Button variant="primary">Create Bucket</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
export default hot(module)(App);