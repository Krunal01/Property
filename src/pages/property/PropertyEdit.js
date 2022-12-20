import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { PROPERTY_TYPES } from "../../utils/data";

function PropertyEdit() {
  const params = useParams();
  // const [propertyEdit, setPropertyEdit] = useState({
  //   ownerName: "",
  //   propertyType: "",
  //   bhk: "",
  //   city: "",
  //   pinCode: "",
  //   address: "",
  //   description: "",
  // });
  const fetchData = async () => {
    try {
      // throw new ("hi");
      const response = await api.get(`/properties/${params.id}`);
      console.log("====================================");
      console.log("edit response", response);
      console.log("====================================");
      if (response.status === 200) {
        // setPropertyEdit(response?.data || []);
        // setPropertyEdit(response.data.ownerName);
        formik.setValues(response.data);
      }
    } catch (error) {
      // console.log(error.message);
      toast.error(error?.response?.data?.message || error.message);
      // toast("data not fetched");
    }
  };

  useEffect(() => {
    // formik.setValues({
    //   ownerName: "",
    // });
    fetchData();
  }, []);

  const editProperty = async () => {
    try {
      const reply = await api.put(`/properties/${params.id}`);
      console.log("====================================");
      console.log(reply);
      console.log("id of reply", reply.id);
      console.log("====================================");
    } catch (error) {
      console.log(error);
      toast("Property is update");
    }
  };
  const formik = useFormik({
    initialValues: {
      ownerName: "",
      propertyType: "",
      bhk: "1",
      city: "",
      pinCode: "",
      address: "",
      description: "",
    },
    validationSchema: Yup.object().shape({
      ownerName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Please Enter Name "),
      propertyType: Yup.string().required("Please select property type"),
      bhk: Yup.number()
        .min(1, "please ente valid bhk")
        .max(50, "please ente valid bhk")
        .required("Please enter bhk"),
      city: Yup.string().required("Please enter your city"),
      pinCode: Yup.string()
        .min(6, "please ente valid number")
        .max(8, "please ente valid bhk")
        .required("Please enter your pincode"),
      address: Yup.string()
        .min(10, "Enter address")
        .max(255, "Enter address")
        .required("Please Enter address "),
      propertyType: Yup.string().required("Please select property type"),
      description: Yup.string(),
    }),
    onSubmit: (values) => editProperty(values),

    enableReinitialize: true,
    validateOnChange: true,
  });
  // formik.setFieldValue();
  const navigate = useNavigate();
  // const createProperty = async (payload) => {
  //   try {
  //     const response = await api.post("/properties", payload);
  //     if (response.status === 201) {
  //       toast.success("Property has been added successfully.");
  //       formik.resetForm();
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     // console.log(error.message);
  //     toast.error("Could not add propety, Please try again.");
  //     // toast.error(error?.response?.data?.message || error.message);
  //     // toast("data not fetched");
  //   }
  // };
  return (
    <Container
      fluid
      className="d-flex  align-items-center justify-content-center"
    >
      <Card className="w-50 m-3">
        <Card.Header>
          <Card.Title>Sale Your Property Here</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="p-2">
              <Form.Label>Owner Name</Form.Label>
              <Form.Control
                // name="ownerName"
                // onChange={formik.handleChange}
                isInvalid={formik.touched.ownerName && formik.errors.ownerName}
                // {...formik.setFieldValue(params.ownerName)}
                {...formik.getFieldProps("ownerName")}
                type="text"
                placeholder="Enter Name"
              />
              <Form.Text className="text-danger">
                {formik.touched.ownerName && formik.errors.ownerName ? (
                  <div className="text-danger">{formik.errors.ownerName}</div>
                ) : null}
              </Form.Text>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="d-flex-column justify-content-md-center p-2 ">
                  <Form.Label>Property Type</Form.Label>

                  <Form.Select
                    isInvalid={
                      formik.touched.propertyType && formik.errors.propertyType
                    }
                    name="propertyType"
                    onChange={formik.handleChange}
                    value={formik.values.propertyType}
                  >
                    <option>select property</option>
                    {PROPERTY_TYPES.map(({ label, value }) => (
                      
                      <option value={value}>{label}</option>
                    ))}
                    {/* <option value={"Home"}>Home</option>
                    <option value={"Farm"}>Farm</option>
                    <option value={"Plot"}>Plot</option> */}
                  </Form.Select>
                  <Form.Text className="text-danger">
                    {formik.touched.propertyType &&
                    formik.errors.propertyType ? (
                      <div className="text-danger">
                        {formik.errors.propertyType}
                      </div>
                    ) : null}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail" className="p-2">
                  <Form.Label>BHK </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter BHK"
                    name="bhk"
                    value={formik.values.bhk}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.bhk && formik.errors.bhk}
                  />
                  <Form.Text className="text-danger">
                    {formik.touched.bhk && formik.errors.bhk ? (
                      <div className="text-danger">{formik.errors.bhk}</div>
                    ) : null}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicEmail" className="p-2">
                    <Form.Label>City </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City Name"
                      name="city"
                      onChange={formik.handleChange}
                      value={formik.values.city}
                      isInvalid={formik.touched.city && formik.errors.city}
                    />
                    <Form.Text className="text-danger">
                      {formik.touched.city && formik.errors.city ? (
                        <div className="text-danger">{formik.errors.city}</div>
                      ) : null}
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail" className="p-2">
                    <Form.Label>PinCode </Form.Label>
                    <Form.Control
                      type="number"
                      name="pinCode"
                      value={formik.values.pinCode}
                      placeholder="Enter PinCode"
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.pinCode && formik.errors.pinCode
                      }
                    />
                    <Form.Text className="text-danger">
                      {formik.touched.pinCode && formik.errors.pinCode ? (
                        <div className="text-danger">
                          {formik.errors.pinCode}
                        </div>
                      ) : null}
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="p-2">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                value={formik.values.address}
                aria-label="With textarea"
                placeholder="Enter Address"
                onChange={formik.handleChange}
                isInvalid={formik.touched.address && formik.errors.address}
              />
              {/* <Form.Control type="" placeholder="Enter Address" /> */}
              <Form.Text className="text-danger">
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-danger">{formik.errors.address}</div>
                ) : null}
              </Form.Text>
            </Form.Group>

            <Form.Group className="p-2" controlId="formBasicEmail">
              <Form.Label>Description of Your Property</Form.Label>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                placeholder="Write Here"
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.description && formik.errors.description
                }
              />
              {/* <Form.Control type="" placeholder="Enter description" /> */}
              <Form.Text className="text-danger">
                {formik.touched.description && formik.errors.description ? (
                  <div className="text-danger">{formik.errors.description}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
            <Form.Group className="d-flex justify-content-end">
              {/* <Link to="/">
                <Button variant="danger" type="reset" className="m-2">
                  Cancel
                </Button>
              </Link> */}
              <Button variant="primary" type="submit" className="m-2">
                Edit Property
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PropertyEdit;
