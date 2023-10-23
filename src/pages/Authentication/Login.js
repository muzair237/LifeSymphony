import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import logoLight from "../../assets/images/Login/logo.png"
import withAuthProtection from '../../Components/Common/withAuthProtection';
import { loginUserReal } from '../../slices/auth/thunk';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(state => ({
    loading: state.Login.loading,
  }));

  const [passwordShow, setPasswordShow] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Please Enter Email!")
      .email("Please Enter a Valid Email!"),
    password: Yup.string().required("Please Enter Password!"),
  });
  const onSubmit = (values) => {
    const loginInfo = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUserReal({ loginInfo: loginInfo, navigate }));
  };

  document.title = "LifeSymphony | Login";

  return (
    <React.Fragment>
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
                <p className="mt-3 fs-15 fw-medium text-dark">Premium Admin & Dashboard Template</p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="mt-4">
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Welcome Back !</h5>
                    <p className="text-muted">Sign In To Continue To LifeSymphony.</p>
                  </div>
                  <div className="p-2 mt-4">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      <Form>
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">Email</Label>
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
                        <div className="mb-3">
                          <div className="float-end">
                            <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
                          </div>
                          <Label className="form-label" htmlFor="password-input">Password</Label>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <Field
                              name="password"
                              type={passwordShow ? "text" : "password"}
                              className="form-control pe-5"
                              placeholder="Enter Password"
                            />
                            <ErrorMessage name="password">
                              {(error) => <div className={"error"}>{error}</div>}
                            </ErrorMessage>
                            <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill align-middle"></i></button>
                          </div>
                        </div>

                        <div className="form-check">
                          <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                          <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
                        </div>

                        <div className="mt-4">
                          <Button color="success"
                            disabled={loading}
                            className="btn btn-success w-100" type="submit">
                            Sign In
                          </Button>
                        </div>
                        <div className="mt-4 text-center">
                          <div className="signin-other-title">
                            <h5 className="fs-13 mb-4 title">Don't have an account ? <Link to="/signUp" className="fw-semibold text-primary text-decoration-underline"> Signup </Link></h5>
                          </div>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withAuthProtection(Login);