import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";
function PropertyAdd() {
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
    onSubmit: (values) => console.log(values),
    enableReinitialize: true,
    validateOnChange: true,
  });
  return (
    <Container className="d-flex-column h-100 w-100 align-items-center justify-content-center">
      <div className="fs-1 d-flex m-2 font-weight-bolder align-items-center justify-content-first">
        Sale Your Property Here
      </div>
      <Card className="w-50 m-2">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="p-2">
            <Form.Label>Owner Name</Form.Label>
            <Form.Control
              // name="ownerName"
              // onChange={formik.handleChange}
              isInvalid={formik.touched.ownerName && formik.errors.ownerName}
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
                >
                  <option>select property</option>
                  <option>Home</option>
                  {/* <option>Farm</option>
                  <option>Plot</option> */}
                </Form.Select>
                <Form.Text className="text-danger">
                  {formik.touched.propertyType && formik.errors.propertyType ? (
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
                    isInvalid={formik.touched.pinCode && formik.errors.pinCode}
                  />
                  <Form.Text className="text-danger">
                    {formik.touched.pinCode && formik.errors.pinCode ? (
                      <div className="text-danger">{formik.errors.pinCode}</div>
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
          <Form.Group className="d-flex">
            <Button variant="primary" type="submit" className="m-2">
              Submit
            </Button>
            <Button variant="danger" type="reset" className="m-2">
              Reset
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}

export default PropertyAdd;
