import React from "react";
import { Row, Col, Alert, Card, CardBody, Container, Label } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

// Formik Validation
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

// import images
// import profile from "../../assets/images/bg.png";
import logoLight from "../../assets/images/Login/logo.png"
import withRouter from "../../Components/Common/withRouter";

const ForgetPassword = props => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => ({
    loading: state.Login.loading,
  }));

  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Please Enter Email!")
      .email("Please Enter a Valid Email!"),
  });
  const onSubmit = (values) => {
    const forgetPasswordInfo = {
      email: values.email,
    };
    console.log(forgetPasswordInfo);
    // dispatch(loginUserReal({ loginInfo: loginInfo, navigate }));
  };

  document.title = "LifeSymphony | Forget Password";

  return (
    <>
      <div className="auth-page-content">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mt-sm-5 mb-4 text-white-50">
                <div>
                  <Link to="/" className="d-inline-block auth-logo">
                    <img src={logoLight} alt="" height="20" />
                  </Link>
                </div>
                <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="mt-4">

                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Forgot Password?</h5>
                    <p className="text-muted">Reset password with LifeSymphony</p>

                    <lord-icon
                      src="https://cdn.lordicon.com/rhvddzym.json"
                      trigger="loop"
                      colors="primary:#0ab39c"
                      style={{ width: "120px", height: "120px" }}
                      className="avatar-xl">
                    </lord-icon>

                  </div>

                  <Alert className="alert-borderless alert-warning text-center mb-2 mx-2" role="alert">
                    Enter your email and instructions will be sent to you!
                  </Alert>
                  <div className="p-2">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      <Form>
                        <div className="mb-4">
                          <Label className="form-label">Email</Label>
                          <Field
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                          />
                          <ErrorMessage name="email">
                            {(error) => <div className={"error"}>{error}</div>}
                          </ErrorMessage>
                        </div>
                        <div className="text-center mt-4">
                          <button className="btn btn-success w-100" type="submit">
                            {loading ? "Sending OTP..." : "Send OTP"}
                          </button>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-4 text-center">
                <p className="mb-0">Wait, I remember my password... <Link to="/login" className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default withRouter(ForgetPassword);
