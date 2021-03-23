import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal, Container, Col, Row, Form } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from 'uuid';



const AddBucket = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    // fetch all location from json file
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

    // End

    // Change handler
    const [formData, setFormData] = useState({
        name: '',
        location: '',
    });
    const { name, location } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
    // Create new bucket
    const { addBucket } = useContext(GlobalContext);
    const onSubmit = () => {
        const newBucket = {
            id: uuidv4(),
            name: name,
            location: location
        }
        addBucket(newBucket);
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create new bucket
            </Button>

            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Form onSubmit={onSubmit} >

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