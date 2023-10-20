import React, { useEffect, useState } from "react";
import {
  LoginContainer,
  RightSec,
  LeftSec,
  FormWrapper,
  LogoImg,
  MainTitle,
  Forms,
  InputTag,
  LoginOpt,
  ForgotPassword,
  LoginBtn,
  BtnWrapper,
  TagContainer,
  SocialLogin,
  Credits,
  GoogleLoginBtn,
} from "./Login.style";
//redux
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/images/Login/logo.png";
import Google from "../../assets/images/Login/google.png";
import Close from "../../assets/images/Login/close.png";
import Hide from "../../assets/images/Login/hide.png";
import Main from "../../assets/images/Login/main.png";
import { Link, useNavigate } from "react-router-dom";
import withRouter from "../../Components/Common/withRouter";
// Formik validation
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

// actions
import {
  loginUser,
  socialLogin,
  resetLoginFlag,
  loginUserReal,
  registerUserReal,
} from "../../slices/auth/thunk";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({
    user: state.Account?.user,
  }));

  const { error, loading, errorMsg } = useSelector((state) => ({
    error: state.Login.error,
    loading: state.Login.loading,
    errorMsg: state.Login.errorMsg,
  }));

  document.title = " SignIn | HREvis";

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
    console.log(loginInfo);
    dispatch(loginUserReal({ loginInfo: loginInfo, navigate }));
  };

  const [showPass, setShowPass] = useState(false);
  return (
    <React.Fragment>
      <LoginContainer>
        <LeftSec>
          <LogoImg>
            <img src={Logo} alt="Logo" />
          </LogoImg>
          <FormWrapper>
            <MainTitle>
              <h1>HREVIS </h1>
              <p>Please fill your detail to access your account.</p>
            </MainTitle>
            <Forms>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={onSubmit}
              >
                <Form>
                  <TagContainer>
                    <label htmlFor="email">Email</label>
                    <InputTag>
                      {" "}
                      <Field
                        id="email"
                        placeholder="johndua@gmail.com"
                        type="email"
                        name="email"
                      />
                      <img
                        src={Close}
                        alt=""
                        onClick={() =>
                          setLoginInfo((prev) => ({ ...prev, username: "" }))
                        }
                      />
                    </InputTag>
                  </TagContainer>
                  <TagContainer>
                    <label htmlFor="password">Password</label>
                    <InputTag>
                      <Field
                        id="password"
                        type={showPass ? "text " : "password"}
                        name="password"
                        placeholder="Enter Password"
                      />
                      <img
                        src={Hide}
                        alt=""
                        onClick={() => setShowPass(!showPass)}
                      />
                    </InputTag>
                  </TagContainer>
                  <LoginOpt>
                    {/* <RemMe>
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </RemMe> */}
                  </LoginOpt>
                  <BtnWrapper>
                    <LoginBtn
                      BGColor="#1CD6CE"
                      FColor="#fff"
                      Padding="15px"
                      color="success"
                      disabled={error ? null : loading ? true : false}
                      className="btn btn-success w-100"
                      type="submit"
                    >
                      {/* {error ? null : loading ? (
                        <Spinner size="sm" className="me-2">
                          {" "}
                          Loading...{" "}
                        </Spinner>
                      ) : null} */}
                      Sign in
                    </LoginBtn>
                  </BtnWrapper>
                </Form>
              </Formik>
            </Forms>
          </FormWrapper>
          <p>@created by webevis</p>
        </LeftSec>
        <RightSec>
          <img src={Main} alt="Main" />
        </RightSec>
      </LoginContainer>
    </React.Fragment >
  );
};

export default withRouter(Login);
