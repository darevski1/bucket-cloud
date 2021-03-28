import React, { useState, useEffect, useContext } from 'react';
import { Container, Col, Row, Button, Tabs, Tab, Table, Form, ListGroup, Item } from 'react-bootstrap';
import { GlobalContext } from "../context/GlobalState";


const viewBucket = (props) => {
  const { buckets, viewBucket, removeBucketItems } = useContext(GlobalContext);
  const [selectedBucket, setSelectedBucket] = useState({
    id: "",
    name: "",
    location: "",
    files: [
      {
        id: "",
        name: "",
        dof: ""
      }
    ]
  })

  const currentBucketId = props.match.params.id;
  console.log(currentBucketId)
  // console.log(buckets)
  // console.log(currentBucketId)
  useEffect(() => {
    const bucketId = currentBucketId;
    const selectedBucket = buckets.find(bucket => bucket.id === parseInt(bucketId));
    setSelectedBucket(selectedBucket);
    console.log(selectedBucket)

  }, [])



  const calcSize = () => {
    var sum = 0;
    sum = selectedBucket.files.map(item => sum = item.size)
    console.log(sum)

    for (var i = 0; sum.length < i; i++) {
      sum += sum[i];
      console.log(sum)
    }
  };

  calcSize();




  const [formData, setFormData] = useState({
    name: '',
  });
  const { name, location } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.files]: e.target.value });
  console.log(formData)
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }



  return (
    <Container>
      <Row>
        <Row>
          <Col>
            <h1 className="mt-5 mb-3">My cloud</h1>
          </Col>
        </Row>


      </Row>
      <Row className="main-heading ">

        <Col>
          <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Home">
              <Row className="ps-2" >
                <Col className="flex-column bold">My cloud</Col>

                <Col className="flex-right">
                  <Form onSubmit={onSubmit} >
                    <div className="mb-3">
                      <Form.File inline>
                        <Form.File.Label>Regular file input</Form.File.Label>
                        <Form.File.Input onChange={e => onChange(e)} value={name} />
                      </Form.File>
                    </div>
                    <Button variant="success" type="submit">Save</Button>{' '}
                  </Form>
                </Col>
              </Row>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {selectedBucket.files.map(item => (
                    <tr key={item.id}>
                      <td>{item.id} </td>
                      <td>{item.name}</td>
                      <td>{item.size}</td>
                      <td>
                        <Button onClick={() => removeBucketItems(currentBucketId)} variant="success" type="submit">Delete</Button>{' '}

                      </td>
                    </tr>
                  ))
                  }

                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="profile" title="Profile">


              <ListGroup className="mt-4">
                <ListGroup.Item><h4 className="">Bucket name:{selectedBucket.name}</h4></ListGroup.Item>
                <ListGroup.Item><h5>Location:{selectedBucket.location}</h5></ListGroup.Item>
                <ListGroup.Item>Storage Size:</ListGroup.Item>

              </ListGroup>


            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default viewBucket;