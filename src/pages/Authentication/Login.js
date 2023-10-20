import React, { useEffect, useState } from "react";
import {
  LoginContainer,
  RightSec,
  LeftSec,
  FormWrapper,
  LogoImg,
  MainTitle,
  Form,
  InputTag,
  LoginOpt,
  RemMe,
  LoginBtn,
  BtnWrapper,
  TagContainer,
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
import { useFormik } from "formik";

// actions
import {
  loginUser,
  socialLogin,
  resetLoginFlag,
  loginUserReal,
  registerUserReal,
} from "../../slices/thunks";

//Import config;
import { FormFeedback } from "reactstrap";
//import images

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({
    user: state.Account?.user,
  }));

  const [userLogin, setUserLogin] = useState([]);
  const [passwordShow, setPasswordShow] = useState(false);

  useEffect(() => {
    if (user && user) {
      setUserLogin({
        username: user.user.username,
        password: user.user.confirm_password,
      });
    }
  }, [user]);
  const loginClicked = () => {
    navigate("/profile");
  };

  const { error, loading, errorMsg } = useSelector((state) => ({
    error: state.Login.error,
    loading: state.Login.loading,
    errorMsg: state.Login.errorMsg,
  }));

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        dispatch(resetLoginFlag());
      }, 3000);
    }
  }, [dispatch, errorMsg]);

  document.title = " SignIn | HREvis";

  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(loginUserReal(loginInfo.username, loginInfo.password, navigate));
  };

  // const validation = useFormik({
  //   enableReinitialize: true,
  //   initialValues: {
  //     username: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //     username: Yup.string().required("Please Enter Your username"),
  //     password: Yup.string().required("Please Enter Your Password"),
  //   }),
  //   onSubmit: (values) => {
  //     dispatch(loginUserReal(props.router.navigate));
  //   },
  // });

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
            <Form>
              <TagContainer>
                <label htmlFor="email">Email</label>
                <InputTag>
                  {" "}
                  <input
                    id="username"
                    placeholder="Enter email"
                    type="username"
                    name="username"
                    value={loginInfo.username}
                    onChange={(e) =>
                      setLoginInfo((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
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
                  <input
                    id="password"
                    type={showPass ? "text " : "password"}
                    name="password"
                    placeholder="Enter password"
                    value={loginInfo.password}
                    onChange={(e) =>
                      setLoginInfo((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                  <img
                    src={Hide}
                    alt=""
                    onClick={() => setShowPass(!showPass)}
                  />
                </InputTag>
              </TagContainer>
              <LoginOpt>
                <RemMe>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </RemMe>
              </LoginOpt>
              <BtnWrapper>
                <LoginBtn
                  BGColor="#1CD6CE"
                  FColor="#fff"
                  Padding="15px"
                  onClick={handleLogin}
                  color="success"
                  disabled={error ? null : loading ? true : false}
                  className="btn btn-success w-100"
                  type="submit"
                >
                  {error ? null : loading ? (
                    <Spinner size="sm" className="me-2">
                      {" "}
                      Loading...{" "}
                    </Spinner>
                  ) : null}
                  Sign in
                </LoginBtn>
              </BtnWrapper>
            </Form>
          </FormWrapper>
          <p>@created by webevis</p>
        </LeftSec>
        <RightSec>
          <img src={Main} alt="Main" />
        </RightSec>
      </LoginContainer>
    </React.Fragment>
  );
};

export default withRouter(Login);
