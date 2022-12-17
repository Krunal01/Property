import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { properties } from "../../utils/data";

function Home() {
  return (
    <Container fluid className="py-3">
      <Row className="gy-3">
        {properties.map((e) => (
          <Col xs="12" sm="6" md="4" lg="3" xl="3" xxl="3" key={e.id}>
            <Card>
              <Card.Header>{e.ownerName}</Card.Header>
              <Card.Body>
                <Card.Title>
                  {e.propertyType} {e.bhk && `| ${e.bhk} BHK`}
                </Card.Title>
                <Card.Text className="mb-0">
                  Address : {e.address} {e.city} ,{e.pinCode}
                </Card.Text>
                <Card.Text>{e.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
// <Card>
//   {e.ownerName}, {e.propertyType}, {e.address}, {e.bhk}, {e.city},
//   {e.pinCode}
// </Card>
