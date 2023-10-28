import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoLight from "../../assets/images/Login/logo.png"
import { Button, Card, CardBody, Col, Container, Row, Input, Label, FormFeedback } from 'reactstrap'
//formik
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import withOTPProtection from '../../Components/Common/withOTPProtection';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../slices/auth/thunk';

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector(state => ({
        loading: state.Login.loading,
    }));
    const otpAddress = sessionStorage.getItem("otpAddress");

    document.title = "LifeSymphont | Create New Password";

    const [passwordShow, setPasswordShow] = useState(false);
    const [confrimPasswordShow, setConfrimPasswordShow] = useState(false);

    const initialValues = {
        password: "",
        confrim_password: "",
    }
    const validationSchema = Yup.object({
        password: Yup.string()
            .required("Please Enter Password!")
            .matches(
                /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                "Password must contain at least 6 characters, one uppercase letter, and one special character (@, $, !, %, *, ?, or &)"
            ),
        confrim_password: Yup.string()
            .when("password", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same"
                ),
            })
            .required("Confirm Password Required"),
    })
    const onSubmit = (values) => {
        const passwordInfo = {
            email: otpAddress,
            newPassword: values?.password
        }
        dispatch(resetPassword({passwordInfo,navigate}))
    }
    return (
        <div className="auth-page-content">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                                <Link to="/#" className="d-inline-block auth-logo">
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
                                    <h5 className="text-primary">Create new password</h5>
                                    <p className="text-muted">Your new password must be different from previous used password.</p>
                                </div>

                                <div className="p-2">
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={onSubmit}
                                    >
                                        <Form>
                                            <div className="mb-3">
                                                <Label className="form-label" htmlFor="password-input">Password</Label>
                                                <div className="position-relative auth-pass-inputgroup">
                                                    <Field
                                                        type={passwordShow ? "text" : "password"}
                                                        className="form-control pe-5 password-input"
                                                        placeholder="Enter password"
                                                        id="password-input"
                                                        name="password"
                                                    />
                                                    <ErrorMessage name="password">
                                                        {(error) => <div className={"error"}>{error}</div>}
                                                    </ErrorMessage>
                                                    <Button color="link" onClick={() => setPasswordShow(!passwordShow)} className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button"
                                                        id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <Label className="form-label" htmlFor="confirm-password-input">Confirm Password</Label>
                                                <div className="position-relative auth-pass-inputgroup mb-3">
                                                    <Field
                                                        type={confrimPasswordShow ? "text" : "password"}
                                                        className="form-control pe-5 password-input"
                                                        placeholder="Confirm password"
                                                        id="confirm-password-input"
                                                        name="confrim_password"
                                                    />
                                                    <ErrorMessage name="confrim_password">
                                                        {(error) => <div className={"error"}>{error}</div>}
                                                    </ErrorMessage>
                                                    <Button color="link" onClick={() => setConfrimPasswordShow(!confrimPasswordShow)} className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button">
                                                        <i className="ri-eye-fill align-middle"></i></Button>
                                                </div>
                                            </div>

                                            <div className="form-check">
                                                <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
                                            </div>

                                            <div className="mt-4">
                                                <Button disabled={loading} color="dark" className="w-100" type="submit">
                                                    {loading ? "Resetting Password..." : "Reset Password"}
                                                </Button>
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
    );
};

export default withOTPProtection(UpdatePassword);