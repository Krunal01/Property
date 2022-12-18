import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Toast } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../utils/api";
// import { properties } from "../../utils/data";

function Home() {
  const [properties, setProperties] = useState([]);
  const fetchData = async () => {
    try {
      // throw new ("hi");
      const response = await api.get("/properties");
      if (response.status === 200) {
        setProperties(response?.data || []);
      }
    } catch (error) {
      // console.log(error.message);
      toast.error(error?.response?.data?.message || error.message);
      // toast("data not fetched");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeEntry = async (id) => {
    try {
      const removedData = await api.delete(`/properties/${id}`);
      // setProperties(removedData);
      console.log(removedData);
      toast.success("Property data has been deleted.");
      fetchData();
    } catch (error) {
      console.log(error);
      toast.error("Property data not deleted");
    }
    console.log(id);
  };
  const valueforUpdate = (id) => {
    console.log("====================================");
    console.log(id);
    console.log("====================================");
  };
  // onSubmit: (values) => {
  //   editProperty(values);
  // };
  return (
    <Container fluid className="py-3">
      <Row className="gy-3">
        {properties.map((e) => (
          <Col xs="12" sm="6" md="4" lg="3" xl="3" xxl="3" key={e.id}>
            <Card>
              <Card.Header>
                {e.propertyType} {e.bhk && `| ${e.bhk} BHK`}
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  {e.ownerName} | {e.id}
                </Card.Title>
                <Card.Text className="mb-0">
                  Address : {e.address} {e.city} ,{e.pinCode}
                </Card.Text>
                <Card.Text>{e.description}</Card.Text>
                <div className="d-flex justify-content-around">
                  <Link to="/property-edit">
                    <Button
                      variant="warning"
                      onClick={() => {
                        valueforUpdate(e);
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
