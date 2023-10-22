import { toast } from "react-toastify";
import { USER_LOGIN, USER_REGISTER } from "../../helpers/url_helper";
import axios from "axios";

//LOGIN
const getLogin = async (loginInfo, navigate) => {
  try {
    const response = await toast.promise(
      axios.post(`${process.env.REACT_APP_BASE_URL}/${USER_LOGIN}`, loginInfo, {
        headers: {
          Accept: "application/json",
        },
      }),
      {
        pending: "Signing In...",
      }
    );
    const { status, auth } = response;
    if (status === true) {
      sessionStorage?.setItem("authUser", JSON?.stringify(auth));
      toast.success("Signed In Successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      toast.error(response?.message);
    }
    return response;
  } catch (error) {
    toast.error(error);
  }
};

//SIGNUP
const getSignedUp = async (signupInfo, navigate) => {
  try {
    const response = await toast.promise(
      axios.post(`${process.env.REACT_APP_BASE_URL}/${USER_REGISTER}`, signupInfo, {
        headers: {
          Accept: "application/json",
        },
      }),
      {
        pending: "Signing Up...",
      }
    );
    const { status, auth } = response;
    if (status === true) {
      sessionStorage?.setItem("authUser", JSON?.stringify(auth));
      toast.success("Signed Up Successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      toast.error(response?.message);
    }
    return response;
  } catch (error) {
    toast.error(error);
  }
};

const getLogout = async (navigate) => {
  try {
    toast.success("Logged Out");
    sessionStorage.removeItem("authUser");
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
    navigate("/login");
  } catch (error) {
    toast.error(error);
  }
};

export const service = {
  getLogin,
  getSignedUp,
  getLogout
};