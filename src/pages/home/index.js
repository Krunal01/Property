import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Toast } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../../utils/api";
// import { properties } from "../../utils/data";

function Home() {
  const [properties, setProperties] = useState([]);
  const fetchData = async () => {
    try {
      // throw new ("hi");
      const response = await api.get("/properties");
      console.log(response);
      if (response.status === 200) {
        setProperties(response?.data || []);
      } else {
        console.log("already");
      }
    } catch (error) {
      // console.log(error.message);
      toast.error(error?.response?.data?.message || error.message);
      // toast("data not fetched");
    }
  };
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

  useEffect(() => {
    fetchData();
  }, []);

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
// let errorObj = {
//   response: {
//     data: null,
//     status: null,
//   },
//   request: null,
//   header: null,
// };
