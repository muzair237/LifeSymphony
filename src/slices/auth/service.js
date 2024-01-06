import { toast } from 'react-toastify';
import {
  USER_LOGIN,
  USER_REGISTER,
  SEND_OTP,
  CONFIRM_OTP,
  UPDATE_PASSWORD,
  UPDATE_PROFILE,
  EDIT_PROFILE_PICTURE,
} from '../../helpers/url_helper';
import axios from 'axios';

//LOGIN
const getLogin = async (loginInfo, navigate) => {
  try {
    const response = await toast.promise(
      axios.post(`${process.env.REACT_APP_BASE_URL}/user/${USER_LOGIN}`, loginInfo, {
        headers: {
          Accept: 'application/json',
        },
      }),
      {
        pending: 'Signing In...',
      },
    );
    console.log(response);
    const { status, auth } = response;
    if (status === true) {
      sessionStorage?.setItem('authUser', JSON?.stringify(auth));
      toast.success('Signed In Successfully!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } else {
      toast.error(response?.message);
    }

    return response?.user;
  } catch (error) {
    toast.error(error);
  }
};

//SIGNUP
const getSignedUp = async (signupInfo, navigate) => {
  try {
    const response = await toast.promise(
      axios.post(`${process.env.REACT_APP_BASE_URL}/user/${USER_REGISTER}`, signupInfo, {
        headers: {
          Accept: 'application/json',
        },
      }),
      {
        pending: 'Signing Up...',
      },
    );
    const { status, auth } = response;
    if (status === true) {
      sessionStorage?.setItem('authUser', JSON?.stringify(auth));
      toast.success('Signed Up Successfully!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } else {
      toast.error(response?.message);
    }
    return response;
  } catch (error) {
    toast.error(error);
  }
};

//SEND OTP
const sendOTP = async (otpAddress, navigate) => {
  try {
    const response = await toast.promise(
      axios.post(`${process.env.REACT_APP_BASE_URL}/user/${SEND_OTP}`, otpAddress, {
        headers: {
          Accept: 'application/json',
        },
      }),
      {
        pending: 'Sending OTP...',
      },
    );
    console.log(response);
    const { status } = response;
    if (status === true) {
      sessionStorage?.setItem('otpAddress', otpAddress?.email);
      toast.success(response?.message);
      navigate('/otpValidation');
    } else {
      toast.error(response?.message, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    toast.error('Failed to Send OTP!');
  }
};

//CONFIRM OTP
const confirmOTP = async (otpInfo, navigate) => {
  try {
    const response = await toast.promise(
      axios.post(`${process.env.REACT_APP_BASE_URL}/user/${CONFIRM_OTP}`, otpInfo, {
        headers: {
          Accept: 'application/json',
        },
      }),
      {
        pending: 'Confirming OTP...',
      },
    );
    if (response?.status === true) {
      toast.success(response?.message);
      sessionStorage.setItem('otpConfirmed', true);
      navigate('/updatePassword');
    } else {
      toast.error(response?.message, {
        autoClose: 3000,
      });
    }
  } catch (error) {
    toast.error('Failed to Verify OTP!');
  }
};

//RESEND OTP
const resendOTP = async otpAddress => {
  try {
    const response = await toast.promise(
      axios.post(`${process.env.REACT_APP_BASE_URL}/user/${SEND_OTP}`, otpAddress, {
        headers: {
          Accept: 'application/json',
        },
      }),
      {
        pending: 'Resending OTP...',
      },
    );
    if (response?.status === true) {
      toast.success('OTP Resent Successfully.');
    } else {
      toast.error('Failed to resend OTP!', {
        autoClose: 3000,
      });
    }
  } catch (error) {
    toast.error('Failed to Resend OTP!');
  }
};

//RESET PASSWORD
const resetPassword = async (passwordInfo, navigate) => {
  try {
    const response = await toast.promise(
      axios.post(`${process.env.REACT_APP_BASE_URL}/user/${UPDATE_PASSWORD}`, passwordInfo, {
        headers: {
          Accept: 'application/json',
        },
      }),
      {
        pending: 'Updating Password...',
      },
    );
    if (response?.status === true) {
      toast.success(response?.message);
      if (navigate) {
        sessionStorage.clear();
        navigate('/login');
      }
    } else {
      toast.error(response?.message, {
        autoClose: 3000,
      });
    }

    return response?.data;
  } catch (error) {
    toast.error('Failed to Update Password!');
  }
};

//UPDATE PROFILE
const updateProfile = async (profileInfo, userId) => {
  try {
    const response = await toast.promise(
      axios.put(`${process.env.REACT_APP_BASE_URL}/user/${UPDATE_PROFILE}/${userId}`, profileInfo, {
        headers: {
          Accept: 'application/json',
        },
      }),
      {
        pending: 'Updating Profile...',
      },
    );
    console.log(response?.data);

    if (response?.status === true) {
      toast.success(response?.message);
    } else {
      toast.error(response?.message, {
        autoClose: 3000,
      });
    }
    return response?.data;
  } catch (error) {
    toast.error('Failed to Update Profile!');
  }
};

//EDIT PROFILE PICTURE
const editProfilePicture = async payload => {
  try {
    const response = await toast.promise(
      axios.post(`${process.env.REACT_APP_BASE_URL}/user/${EDIT_PROFILE_PICTURE}`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
      {
        pending: 'Updating Profile Picture...',
      },
    );
    if (response?.status === true) {
      toast.success(response?.message);
    } else {
      toast.error(response?.message, {
        autoClose: 3000,
      });
    }
    return response?.user;
  } catch (error) {
    toast.error('Failed to Update Profile Picture!');
  }
};

const getLogout = async navigate => {
  try {
    toast.success('Logged Out');
    sessionStorage.removeItem('authUser');
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf('=');
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
    navigate('/login');
  } catch (error) {
    toast.error(error);
  }
};

export const service = {
  getLogin,
  getSignedUp,
  getLogout,
  sendOTP,
  confirmOTP,
  resendOTP,
  resetPassword,
  updateProfile,
  editProfilePicture,
};
