import { service } from "./service";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginUserReal = createAsyncThunk(
  "login/loginUserReal",
  async ({ loginInfo, navigate }) => {
    try {
      const resp = await service.getLogin(loginInfo, navigate);
      return resp;
    } catch (error) {}
  }
);
export const registerUserReal = createAsyncThunk(
  "register/registerUserReal",
  async ({ signUpInfo, navigate }) => {
    try {
      return await service.getSignedUp(signUpInfo, navigate);
    } catch (error) {}
  }
);

// SEND OTP
export const sendOTP = createAsyncThunk(
  "otp/sendOTP",
  async ({ otpAddress, navigate }) => {
    try {
      const resp = await service.sendOTP(otpAddress, navigate);
      return resp;
    } catch (error) {
      return "An error occurred in sending OTP!";
    }
  }
);

// CONFIRM OTP
export const confirmOTP = createAsyncThunk(
  "otp/confirmOTP",
  async ({ otpInfo, navigate }) => {
    try {
      const resp = await service.confirmOTP(otpInfo, navigate);
      return resp;
    } catch (error) {
      return "An error occurred in verifying OTP!";
    }
  }
);

// RESEND OTP
export const resendOTP = createAsyncThunk(
  "otp/resendOTP",
  async ({ otpAddress }) => {
    try {
      const resp = await service.resendOTP(otpAddress);
      return resp;
    } catch (error) {
      return "An error occurred in resending OTP!";
    }
  }
);

// RESET PASSWORD
export const resetPassword = createAsyncThunk(
  "reset/resetPassword",
  async ({ passwordInfo, navigate }) => {
    try {
      const resp = await service.resetPassword(passwordInfo, navigate);
      return resp;
    } catch (error) {
      return "An Error Occurred in Updating Password!";
    }
  }
);

export const logoutUser = createAsyncThunk("logout/logoutUser", async ({navigate}) => {
  try {
    return await service.getLogout(navigate);
  } catch (error) {}
});

