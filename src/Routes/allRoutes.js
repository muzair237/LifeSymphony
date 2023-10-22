import React from "react";
import { Navigate } from "react-router-dom";

//AuthenticationInner pages
// import Basic404 from "../pages/Authentication/";

//login
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";

//Dashboard
import Dashboard from "../pages/Dashboard/Dashoboard";

//Tasks
import Tasks from "../pages/Tasks/tasks"

//Analytics
import Analytics from "../pages/Analytics/analytics";

//Reports
import Reports from "../pages/Reports/reports";

//Profile
import Profile from "../pages/Profile/Profile";
import SignUp from "../pages/Authentication/SignUp";






//AuthenticationInner pages
// import Basic404 from "../pages/AuthenticationInner/Errors/Basic404";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/index", component: <Dashboard /> },
  { path: "/tasks", component: <Tasks /> },
  { path: "/analytics", component: <Analytics /> },
  { path: "/reports", component: <Reports /> },
  { path: "/profile", component: <Profile /> },
 

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

  //AuthenticationInner pages
  // { path: "/auth-404-basic", component: <Basic404 /> },
];

export { authProtectedRoutes, publicRoutes };
