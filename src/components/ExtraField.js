import React from "react";
import { Col, Form, Row } from "react-bootstrap";

function ExtraField({ propertyType, formik }) {
  //   const formik = useFormik();
  if (propertyType == "farm") {
    return (
      <Form.Group controlId="formBasicEmail" className="p-2">
        <Form.Label>Servey Number </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Servey Number"
          name="servey_number"
          value={formik.values.servey_number}
          onChange={formik.handleChange}
          isInvalid={
            formik.touched.servey_number && formik.errors.servey_number
          }
        />
        <Form.Text className="text-danger">
          {formik.touched.servey_number && formik.errors.servey_number ? (
            <div className="text-danger">{formik.errors.servey_number}</div>
          ) : null}
        </Form.Text>
      </Form.Group>
    );
  } else if (propertyType == "plot") {
    return (
      <Form.Group controlId="formBasicEmail" className="p-2">
        <Form.Label>Plot </Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter plot / servey number"
          name="servey_number"
          value={formik.values.servey_number}
          onChange={formik.handleChange}
          isInvalid={
            formik.touched.servey_number && formik.errors.servey_number
          }
        />
        <Form.Text className="text-danger">
          {formik.touched.servey_number && formik.errors.servey_number ? (
            <div className="text-danger">{formik.errors.servey_number}</div>
          ) : null}
        </Form.Text>
      </Form.Group>
    );
  } else if (propertyType == "shop") {
    return (
      <Form.Group controlId="formBasicEmail" className="p-2">
        <Row>
          <Col>
            <Form.Label>Shop Number </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter shop number"
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
          </Col>
          <Col>
            <Form.Label>Floors</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter floor detail"
              name="floor"
              value={formik.values.floor}
              onChange={formik.handleChange}
              isInvalid={formik.touched.floor && formik.errors.floor}
            />
            <Form.Text className="text-danger">
              {formik.touched.floor && formik.errors.floor ? (
                <div className="text-danger">{formik.errors.floor}</div>
              ) : null}
            </Form.Text>
            {/* </Form.Group> */}
          </Col>
        </Row>
      </Form.Group>
    );
  } else if (propertyType == "appartment") {
    return (
      <Row>
        <Col>
          <Form.Group controlId="formBasicEmail" className="p-2">
            <Form.Label>Appartment Number </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter appartment number"
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
        <Col>
          <Col>
            <Form.Group controlId="formBasicEmail" className="p-2">
              <Form.Label>Floors</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter floor detail"
                name="floor"
                value={formik.values.floor}
                onChange={formik.handleChange}
                isInvalid={formik.touched.floor && formik.errors.floor}
              />
              <Form.Text className="text-danger">
                {formik.touched.floor && formik.errors.floor ? (
                  <div className="text-danger">{formik.errors.floor}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </Col>
        </Col>
      </Row>
    );
  } else if (propertyType == "home") {
    return (
      <Form.Group controlId="formBasicEmail" className="p-2">
        <Row>
          <Col>
            <Form.Label>BHK </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter home number"
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
          </Col>
          {/* <Form.Group controlId="formBasicEmail" className="p-2"> */}
          <Col>
            <Form.Label>Floors</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter floor detail"
              name="floor"
              value={formik.values.floor}
              onChange={formik.handleChange}
              isInvalid={formik.touched.floor && formik.errors.floor}
            />
            <Form.Text className="text-danger">
              {formik.touched.floor && formik.errors.floor ? (
                <div className="text-danger">{formik.errors.floor}</div>
              ) : null}
            </Form.Text>
            {/* </Form.Group> */}
          </Col>
        </Row>
      </Form.Group>
    );
  }
}

export default ExtraField;
