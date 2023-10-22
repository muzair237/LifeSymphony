import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserReal,
  logoutUser,
  registerUserReal,
  updateUser,
  resetLoginFlag,
} from "./thunk";
export const initialState = {
  user: {},
  error: "", // for error message
  loading: false,
  isUserLogout: false,
  errorMsg: false, // for error
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
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
        state.errorMsg = true;
      })

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
        state.errorMsg = true;
      })

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