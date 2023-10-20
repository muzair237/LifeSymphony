//Include Both Helper File with needed methods

import {
  loginSuccess,
  logoutUserSuccess,
  apiError,
  reset_login_flag,
} from "./reducer";

import axios from "axios";
import { USER_LOGIN } from "../../../helpers/url_helper";
import { api } from "../../../config";

export const loginUserReal =
  (email, password, navigate) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_USER_URL}/${USER_LOGIN}`,
        {
          email,
          password,
        },
        {
          headers: {
            Accept: "aplication/json",
          },
        }
      );

      // const { success, token } = response;
      const { status, user } = response;
      if (status === true) {
        sessionStorage?.setItem("authUser", JSON?.stringify(user));
        dispatch(loginSuccess(response));
        navigate("/dashboard");
      } else {
        dispatch(apiError(response));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const registerUserReal = (history) => async (dispatch) => {
  axios.defaults.baseURL;
  try {
    const popup = window.open(
      process.env.REACT_APP_USER_URL + "user/signup",
      "",
      "width=500,height=700"
    );
    const messagePromise = new Promise((resolve, reject) => {
      window.addEventListener("message", (event) => {
        if (event.origin !== process.env.REACT_APP_BASE_URL) return;
        resolve(event.data);
        popup.close();
      });
    });
    const resp = await messagePromise;
    if (resp) {
      sessionStorage.setItem("authUser", JSON.stringify(resp));
      if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
        var finallogin = JSON.stringify(resp);
        finallogin = JSON.parse(finallogin);
        resp = finallogin.data;
        if (finallogin.status === "success") {
          dispatch(loginSuccess(resp));
          history("/Profile");
        } else {
          dispatch(apiError(finallogin));
        }
      } else {
        dispatch(loginSuccess(resp));
        history("/Profile");
      }
    }
  } catch (error) {
    console.error(error);
  }
};
export const updateUser = async (userId, user) => {
  try {
    const obj = JSON.parse(sessionStorage.getItem("authUser"));
    obj.otherCountries = user.otherCountries;
    obj.country = user.country;
    obj.scope = user.scope;
    obj.backgroundPic = user.banner;

    let resp = await axios.patch(
      process.env.REACT_APP_USER_URL + `user/${userId}`,
      user
    );
    sessionStorage.setItem("authUser", JSON.stringify(obj));
    return resp;
  } catch (error) {
    console.error(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("authUser");
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      let response = await axios.get(
        `${process.env.REACT_APP_USER_URL}user/logout`
      );
      // const response = fireBaseBackend.logout;
      dispatch(logoutUserSuccess(response));
    } else {
      dispatch(logoutUserSuccess(true));
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const resetLoginFlag = () => async (dispatch) => {
  try {
    const response = dispatch(reset_login_flag());
    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};

// export const socialLogin = (data, history, type) => async (dispatch) => {
//   try {
//     let response;

//     if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//       const fireBaseBackend = getFirebaseBackend();
//       response = fireBaseBackend.socialLoginUser(data, type);
//     } else {
//       response = postSocialLogin(data);
//     }

//     const socialdata = await response;

//     if (socialdata) {
//       sessionStorage.setItem("authUser", JSON.stringify(response));
//       dispatch(loginSuccess(response));
//       history("/dashboard");
//     }
//   } catch (error) {
//     dispatch(apiError(error));
//   }
// };
