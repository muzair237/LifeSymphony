import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserReal,
  logoutUser,
  registerUserReal,
  sendOTP,
  confirmOTP,
  resendOTP,
  resetPassword
} from "./thunk";
export const initialState = {
  user: {},
  error: "", // for error message
  loading: false,
  isUserLogout: false,
  isError: false,
  errorMsg: "", // for error
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder

      //LOGIN
      .addCase(loginUserReal.pending, (state, action) => {
        (state.user = {}), (state.error = "");
        state.loading = true;
        state.errorMsg = false;
      })
      .addCase(loginUserReal.fulfilled, (state, action) => {
        (state.user = action.payload), (state.error = "");
        state.loading = false;
        state.errorMsg = false;
      })
      .addCase(loginUserReal.rejected, (state, action) => {
        state.error = action?.payload;
        state.loading = false;
        state.isUserLogout = false;
        state.isError = true;
        state.errorMsg = "An Error Occured in Signing In!";
      })

      //SIGNUP
      .addCase(registerUserReal.pending, (state, action) => {
        (state.user = {}), (state.error = "");
        state.loading = true;
        state.errorMsg = false;
      })
      .addCase(registerUserReal.fulfilled, (state, action) => {
        (state.user = action.payload?.user), (state.error = "");
        state.loading = false;
        state.errorMsg = false;
      })
      .addCase(registerUserReal.rejected, (state, action) => {
        state.error = action?.payload;
        state.loading = false;
        state.isUserLogout = false;
        state.isError = true;
        state.errorMsg = "An Error Occured in Signing Up!";
      })
      //SEND OTP REDUCERS
      .addCase(sendOTP.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendOTP.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendOTP.rejected, (state) => {
        state.isError = true;
        state.errorMsg = "An Error Occured in Sending OTP!";
        state.loading = false;
      })

      //CONFIRM OTP REDUCERS
      .addCase(confirmOTP.pending, (state) => {
        state.loading = true;
      })
      .addCase(confirmOTP.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(confirmOTP.rejected, (state) => {
        state.errorMsg = "An Error Occurred in Verifying OTP!";
        state.isError = true;
        state.loading = false;
      })

      //RESEND OTP REDUCERS
      .addCase(resendOTP.pending, (state) => {
        state.loading = true;
      })
      .addCase(resendOTP.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resendOTP.rejected, (state) => {
        state.errorMsg = "An error occurred in Resending OTP!";
        state.isError = true;
        state.loading = false;
      })

      //RESET PASSWORD REDUCERS
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.errorMsg = "An error occurred in updating password!";
        state.isError = true;
        state.loading = false;
      })

      //LOGOUT
      .addCase(logoutUser.pending, (state, action) => {
        state.error = "";
        state.loading = true;
        state.errorMsg = false;
        state.isUserLogout = false;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.error = "";
        state.loading = false;
        state.errorMsg = false;
        state.isUserLogout = true;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.isUserLogout = false;
        state.errorMsg = true;
      })
  },
});

// export const { apiError, loginSuccess, logoutUserSuccess, reset_login_flag } =
//   loginSlice.actions;

export default loginSlice.reducer;