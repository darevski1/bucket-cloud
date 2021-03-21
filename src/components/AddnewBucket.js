import React, { useState, useEffect } from 'react';
import { Button, Modal, Container, Col, Row, Form } from "react-bootstrap";

const AddBucket = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    // Create new bucket
    const [formData, setFormData] = useState({
        name: '',
        location: '',
    });

    const listBucket = [
        {
            "id": "1",
            "name": "Some bucket",
            "location": "Skopje"
        }
    ]

    const [list, setItem] = useState(listBucket);


    const { name, location } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Create new bucket
    const onSubmit = async (e) => {
        e.preventDefault();

        alert("Ds")
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create new bucket
            </Button>

            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Form onSubmit={e => onSubmit(e)} >

                    <Modal.Header closeButton>
                        <Modal.Title>Add new bucket</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Container>

                            <Row className="head_bucket">
                                <Col sm={6}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Label>Bucket name:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Enter name for your new bucket"
                                            value={name}
                                            onChange={e => onChange(e)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label>Bucket Location:</Form.Label>
                                        <Form.Control as="select" name="location" value={location} onChange={e => onChange(e)}>
                                            {data.map((d, i) => {
                                                return (
                                                    <option key={i}>{d.location}</option>
                                                )
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>

                            </Row>
                        </Container>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                    </Button>
                        <Button variant="primary" type="submit">Save Bucket</Button>{' '}

                    </Modal.Footer>
                </Form>

            </Modal>
        </>
    );
}

export default AddBucket;