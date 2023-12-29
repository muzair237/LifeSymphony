import React from "react";
import { Navigate } from "react-router-dom";

//AuthenticationInner pages
// import Basic404 from "../pages/Authentication/";

//Auth
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Logout from "../pages/Authentication/Logout";
import ForgetPassword from "../pages/Authentication/ForgetPassword";
import OTPValidation from "../pages/Authentication/OTPValidation";
import Updatepassword from "../pages/Authentication/UpdatePassword";

//Dashboard
import Dashboard from "../pages/Dashboard/Dashoboard";

//Body Calculator
import BodyCalculator from "../pages/Body Calculator/BodyCalculator";

//Profile
import Profile from "../pages/Profile/Profile";

//Daily Quote
import DailyQuote from "../pages/Daily Quote/DailyQuote";

//Blogs
import Blogs from "../pages/Blogs/HealthWisdom";

//AuthenticationInner pages
// import Basic404 from "../pages/AuthenticationInner/Errors/Basic404";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/index", component: <Dashboard /> },
  { path: "/bodyCalculator", component: <BodyCalculator /> },
  { path: "/profile", component: <Profile /> },
  { path: "/dailyQuote", component: <DailyQuote /> },
  { path: "/healthWisdom", component: <Blogs /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/signUp", component: <SignUp /> },
  { path: "/forgetPassword", component: <ForgetPassword /> },
  { path: "/otpValidation", component: <OTPValidation /> },
  { path: "/updatepassword", component: <Updatepassword /> },

  //AuthenticationInner pages
  // { path: "/auth-404-basic", component: <Basic404 /> },
];

export { authProtectedRoutes, publicRoutes };
