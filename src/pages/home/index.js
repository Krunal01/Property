import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Toast } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../utils/api";

function Home() {
  const [properties, setProperties] = useState([]);
  const fetchData = async () => {
    try {
      const response = await api.get("/properties");
      if (response.status === 200) {
        setProperties(response?.data || []);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeEntry = async (id) => {
    try {
      const removedData = await api.delete(`/properties/${id}`);
      toast.success("Property data has been deleted.");
      fetchData();
    } catch (error) {
      toast.error("Property data not deleted");
    }
  };
  return (
    <Container fluid className="py-3">
      <Row className="gy-3">
        {properties.map((e) => (
          <Col xs="12" sm="6" md="4" lg="3" xl="3" xxl="3" key={e.id}>
            <Card className="d-flex align-items-stretch h-100">
              <Card.Header>
                {e.propertyType}{" "}
                {e.bhk && e.propertyType == "home" ? `${e.bhk} | BHK` : e.farm}
              </Card.Header>
              <Card.Body>
                <Card.Img src={e.documents}></Card.Img>
                <Card.Title>
                  {e.ownerName} | {e.id}
                </Card.Title>
                <Card.Text className="mb-0">
                  Address : {e.address} {e.city} ,{e.pinCode}
                </Card.Text>
                <Card.Text>{e.description}</Card.Text>
                <div className="d-flex justify-content-around">
                  <Link to={`/property-edit/${e.id}`}>
                    <Button
                      variant="warning"
                      onClick={() => {
                        fetchData(e);
                      }}
                    >
                      Update
                    </Button>
                  </Link>
                  <Button variant="danger" onClick={() => removeEntry(e.id)}>
                    Delete
                  </Button>
                </div>
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
// let errorObj = {
//   response: {
//     data: null,
//     status: null,
//   },
//   request: null,
//   header: null,
// };
// const fetchData = () => {
//   api
//     .get("/properties")
//     .then((response) => {
//       console.log(response);
//       setProperties(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
