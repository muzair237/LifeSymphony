import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row, Button } from 'reactstrap';
//import images
import logoLight from "../../assets/images/Login/logo.png"
import withOTPProtection from '../../Components/Common/withOTPProtection';
import { useDispatch, useSelector } from 'react-redux';
import { confirmOTP, resendOTP } from '../../slices/auth/thunk';

const OTPValidation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { loading } = useSelector(state => ({
        loading: state.Login.loading,
    }));
    const otpAddress = sessionStorage.getItem("otpAddress");
    document.title = "LifeSymphony | OTP Validation";
    const [otpCode, setOtpCode] = useState(["", "", "", ""]);

    const getInputElement = (index) => {
        return document.getElementById('digit' + index + '-input');
    }

    const moveToNext = (index) => {
        if (getInputElement(index).value.length === 1) {
            if (index !== 4) {
                getInputElement(index + 1).focus();
            } else {
                getInputElement(index).blur();
                // Gather the OTP digits and set the state
                const otpDigits = [];
                for (let i = 1; i <= 4; i++) {
                    otpDigits.push(getInputElement(i).value);
                }
                setOtpCode(otpDigits.join("")); // Combine the digits into a 4-digit OTP code
                console.log('OTP Code:', otpDigits.join(""));
            }
        }
    };
    const handleInput = () => {
        console.log(otpCode);
        console.log(Array.isArray(otpCode));
        let otpInfo;
        if (Array.isArray(otpCode)) {
            setError("Please Enter Proper OTP");
        } else {
            otpInfo = {
                email: otpAddress,
                otp: otpCode,
            };
            console.log(otpInfo);
            dispatch(confirmOTP({ otpInfo, navigate }));
        }
    };
    const handleResend = () => {
        const otpAddress = {
            email: sessionStorage.getItem("otpAddress")
        }
        dispatch(resendOTP({otpAddress}));
    }
    return (
        <React.Fragment>
            <div className="auth-page-wrapper">
                <div className="auth-page-content">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center mt-sm-5 mb-4 text-white-50">
                                    <div>
                                        <Link to="/dashboard" className="d-inline-block auth-logo">
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
                                        <div className="mb-4">
                                            <div className="avatar-lg mx-auto">
                                                <div className="avatar-title bg-light text-primary display-5 rounded-circle">
                                                    <i className="ri-mail-line"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-2 mt-4">
                                            <div className="text-muted text-center mb-4 mx-lg-3">
                                                <h4 className="">Verify Your Email</h4>
                                                <p>Please enter the 4 digit code sent to <span className="fw-semibold">{otpAddress}</span></p>
                                            </div>

                                            <form>
                                                <Row>
                                                    <Col className="col-3">
                                                        <div className="mb-3">
                                                            <label htmlFor="digit1-input" className="visually-hidden">Digit 1</label>
                                                            <input type="text"
                                                                className="form-control form-control-lg bg-light border-light text-center"
                                                                maxLength="1"
                                                                id="digit1-input" onChange={() => setError("")} onKeyUp={() => moveToNext(1)} />
                                                        </div>
                                                    </Col>

                                                    <Col className="col-3">
                                                        <div className="mb-3">
                                                            <label htmlFor="digit2-input" className="visually-hidden">Digit 2</label>
                                                            <input type="text"
                                                                className="form-control form-control-lg bg-light border-light text-center"
                                                                maxLength="1"
                                                                id="digit2-input" onChange={() => setError("")} onKeyUp={() => moveToNext(2)} />
                                                        </div>
                                                    </Col>

                                                    <Col className="col-3">
                                                        <div className="mb-3">
                                                            <label htmlFor="digit3-input" className="visually-hidden">Digit 3</label>
                                                            <input type="text"
                                                                className="form-control form-control-lg bg-light border-light text-center"
                                                                maxLength="1"
                                                                id="digit3-input" onChange={() => setError("")} onKeyUp={() => moveToNext(3)} />
                                                        </div>
                                                    </Col>

                                                    <Col className="col-3">
                                                        <div className="mb-3">
                                                            <label htmlFor="digit4-input" className="visually-hidden">Digit 4</label>
                                                            <input type="text"
                                                                className="form-control form-control-lg bg-light border-light text-center"
                                                                maxLength="1"
                                                                id="digit4-input" onChange={() => setError("")} onKeyUp={() => moveToNext(4)} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                {error !== "" && (
                                                    <div style={{ color: "red" }}>{error}</div>
                                                )}
                                            </form>
                                            <div className="mt-3">
                                                <Button onClick={handleInput} disabled={loading} color="dark" className="w-100">
                                                    {loading ? "Confirming OTP..." : "Confirm OTP"}
                                                </Button>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-4 text-center">
                                    <p className="mb-0">Didn't receive a code ? <Link onClick={handleResend}
                                        to="/otpValidation" className="fw-semibold text-primary text-decoration-underline">Resend</Link> </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </React.Fragment >
    );
};

export default withOTPProtection(OTPValidation);