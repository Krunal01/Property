import { useFormik } from "formik";
import { Card, Container, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
function Login() {
  const formik = useFormik({
    initialValues: {
      emialAddress: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      emialAddress: yup.string().required("Enter email address"),
      password: yup
        .string()
        .min(4, "Too Short!")
        .max(20, "Too Long!")
        .required("password is required"),
    }),
    onSubmit: (values) => console.log(values),
    enableReinitialize: true,
    validateOnChange: true,
  });
  return (
    <Container className="w-100 h-100 d-flex-column align-item-center justify-content-center">
      <div className="fs-1 d-flex m-2 font-weight-bolder align-items-center justify-content-first">
        Welcome to Property Selling
      </div>
      <Card className="w-50 p-2 d-flex-column align-item-center justify-content-center">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="p-2" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              //   name="emailAddress"
              isInvalid={
                formik.touched.emialAddress && formik.errors.emialAddress
              }
              {...formik.getFieldProps("emialAddress")}
            />
            <Form.Text className="text-danger">
              {formik.touched.emialAddress && formik.errors.emialAddress ? (
                <div className="text-danger">{formik.errors.emialAddress}</div>
              ) : null}
            </Form.Text>
          </Form.Group>

          <Form.Group className="p-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              isInvalid={formik.touched.password && formik.errors.password}
              {...formik.getFieldProps("password")}
            />
            <Form.Text className="text-danger p-0">
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </Form.Text>
          </Form.Group>

          <Form.Group className="d-flex justify-content-between pt-3">
            <Button variant="success" type="submit" className="m-2 w-50">
              Create New Account
            </Button>
            <Button variant="primary" type="submit" className="m-2 w-50">
              Login
            </Button>
          </Form.Group>
          <Form.Group className="p-2" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
            <Form.Text className="text-blue">forgot password ?</Form.Text>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
