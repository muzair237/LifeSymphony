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
    console.log(response);
    const { status, auth } = response;
    if (status === true) {
      sessionStorage?.setItem("authUser", JSON?.stringify(auth));
      navigate("/dashboard");
    } else {
      toast.error(response?.errors);
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
    console.log(response?.data);
    if (response?.data?.status === true) {
      sessionStorage.setItem("authUser", JSON.parse(response?.data?.token));
      navigate("/");
    } else {
      toast.error(response?.data?.message, {
        autoClose: 3000
      });
    }
    return response?.data?.user;
  } catch (error) {
    toast.error("Failed to SignUp!");
    // toast.error(error?.response?.data?.message);
  }
};




export const service = {
  getLogin,
  getSignedUp,
};