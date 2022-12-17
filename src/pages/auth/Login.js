import { useFormik } from "formik";
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
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          //   name="emailAddress"
          isInvalid={formik.touched.emialAddress && formik.errors.emialAddress}
          {...formik.getFieldProps("emialAddress")}
        />
        <Form.Text className="text-danger">
          {formik.touched.emialAddress && formik.errors.emialAddress ? (
            <div className="text-danger">{formik.errors.emialAddress}</div>
          ) : null}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          isInvalid={formik.touched.password && formik.errors.password}
          {...formik.getFieldProps("password")}
        />
        <Form.Text className="text-danger">
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
