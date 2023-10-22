import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import logoLight from "../../assets/images/Login/logo.png"
import withRouter from '../../Components/Common/withRouter';
import { registerUserReal } from '../../slices/auth/thunk';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector(state => ({
        loading: state.Login.loading,
    }));

    const [passwordShow, setPasswordShow] = useState(false);

    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    };
    const validationSchema = Yup.object({
        firstname: Yup.string()
            .required("Please Enter First Name!")
            .min(3, "First Name must be at least 3 characters"),
        lastname: Yup.string()
            .required("Please Enter Last Name!")
            .min(3, "Last Name must be at least 3 characters"),
        email: Yup.string()
            .required("Please Enter Email!")
            .email("Please Enter a Valid Email!"),
        password: Yup.string()
            .required("Please Enter Password!")
            .matches(
                /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                "Password must contain at least 6 characters, one uppercase letter, and one special character (@, $, !, %, *, ?, or &)"
            ),
    });
    const onSubmit = (values) => {
        const signUpInfo = {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
        };
        dispatch(registerUserReal({ signUpInfo: signUpInfo, navigate }));
    };

    document.title = "LifeSymphony | SignUp";

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
                            <Card className="mt-3">
                                <CardBody className="p-4">
                                    <div className="text-center mt-2">
                                        <h5 className="text-primary">Create New Account</h5>
                                        <p className="text-muted">Get Your Free LifeSymphony Account Now</p>
                                    </div>
                                    <div className="p-2 mt-4">
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={onSubmit}
                                        >
                                            <Form>
                                                <div className="row">
                                                    <div className="col mb-3">
                                                        <Label htmlFor="firstname" className="form-label">First Name *</Label>
                                                        <Field
                                                            name="firstname"
                                                            className="form-control"
                                                            placeholder="Enter First Name"
                                                            type="text"
                                                        />
                                                        <ErrorMessage name="firstname">
                                                            {(error) => <div className={"error"}>{error}</div>}
                                                        </ErrorMessage>
                                                    </div>
                                                    <div className="col mb-3">
                                                        <Label htmlFor="lastname" className="form-label">Last Name  *</Label>
                                                        <Field
                                                            name="lastname"
                                                            className="form-control"
                                                            placeholder="Enter Last Name"
                                                            type="text"
                                                        />
                                                        <ErrorMessage name="lastname">
                                                            {(error) => <div className={"error"}>{error}</div>}
                                                        </ErrorMessage>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <Label htmlFor="email" className="form-label">Email *</Label>
                                                    <Field
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Enter Email"
                                                        type="email"
                                                    />
                                                    <ErrorMessage name="email">
                                                        {(error) => <div className={"error"}>{error}</div>}
                                                    </ErrorMessage>
                                                </div>
                                                <div className="mb-3">
                                                    <Label className="form-label" htmlFor="password-input">Password *</Label>
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
                                                        Sign Up
                                                    </Button>
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <p className="mb-0">Already have an account ? <Link to="/login" className="fw-semibold text-primary text-decoration-underline"> Sign In </Link> </p>

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

export default withRouter(SignUp);