import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { logoutUser } from "../../slices/auth/thunk";
//redux
import { useSelector, useDispatch } from "react-redux";

import withRouter from "../../Components/Common/withRouter";
import { toast } from "react-toastify";

const Logout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isUserLogout } = useSelector((state) => ({
    isUserLogout: state.Login.isUserLogout,
  }));

  function clearCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
  }

  useEffect(() => {
    dispatch(logoutUser());
    sessionStorage.removeItem("authUser"); // Remove the authUser item from sessionStorage
    toast.success("Logged Out Successfully!")
    clearCookies();
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }, [dispatch]);

  if (isUserLogout) {
    sessionStorage.removeItem("authUser");
    clearCookies();
    return <Navigate to="/login" />;
  }

  return <></>;
};

Logout.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Logout);
