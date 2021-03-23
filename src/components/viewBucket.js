import React, { useState, useEffect, useContext } from 'react';
import { Container, Col, Row, Button, Tabs, Tab, Table } from 'react-bootstrap';
import { GlobalContext } from "../context/GlobalState";


const viewBucket = (props) => {

  const { viewBucket, buckets } = useContext(GlobalContext);
  const [selectedBucket, setSelectedBucket] = useState({
    id: "",
    name: "",
    location: ""
  })
  const currentBucketId = props.match.params.id;
  console.log(currentBucketId)
  useEffect(() => {
    const bucketId = currentBucketId;
    const selectedBucket = buckets.find(bucket => bucket.id === bucketId);
    setSelectedBucket(selectedBucket);
  }, [currentBucketId, buckets])
  return (
    <Container>
      <Row>
        <Col>   <h1>My Cloud</h1></Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Home">

              <Row>
                <Col className="space_between mt-15 mb-10">
                  <h4>All Bucket - 2</h4>
                </Col>
                <Col> <Button variant="outline-danger">Danger</Button>{' '}</Col>
              </Row>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Last Modifed</th>
                    <th>Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              dsadasds
              </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default viewBucket;