import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar ';
import { hot } from "react-hot-loader";
import { Container, Col, Row, Button, Form, Tabs, Tab } from 'react-bootstrap';
import AddBucket from './components/AddnewBucket';
// import { stockData } from "./data/location.js";


const App = () => {

    // const [data, setData] = useState([]);
    // const getData = () => {
    //     fetch("./data.json",
    //         {
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'method': 'get',
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //             }
    //         }
    //     )
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             setData(myJson)
    //         });
    // }
    // useEffect(() => {
    //     getData()
    // }, [])







    console.log(formData);
    return (
        <div className="App">
            <Navbar />
            <Container>
                <Row className="heading">
                    <Col className="space_between">
                        <h4>All Bucket - 2</h4>
                        {/* <Button variant="primary">Create new Bucket</Button>{' '} */}

                        <AddBucket />
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

        </div >
    )
}
export default hot(module)(App);