import React, { useContext } from 'react';
import { Container, Col, Row, Button, Form, Tabs, Tab } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";


const Bucket = () => {
    const { buckets, removeBucket } = useContext(GlobalContext);
    return (
        <Container>
            <Row className="heading">
                <Col className="space_between">
                    <h4>All Bucket - 2</h4>
                    <Link to="/add-new" >
                        <Button variant="success">Add</Button>{' '}</Link>

                </Col>
            </Row>
            <Row className="head_bucket">
                <Col sm={8}>Name</Col>
                <Col sm={4}>Location</Col>
            </Row>
            {buckets.map(bucket => (
                <Row className="bucket_list" key={bucket.id}>
                    <Col sm={6}>
                        <Link to={`/bucket/${bucket.id}`}>
                            {bucket.name}
                        </Link>
                    </Col>
                    <Col sm={4}>
                        {bucket.location}
                    </Col>
                    <Col sm={2}>
                        <Button onClick={() => removeBucket(bucket.id)} variant="success" type="submit">Delete</Button>{' '}

                    </Col>
                </Row>
            ))
            }

        </Container >
    )
}
export default Bucket;