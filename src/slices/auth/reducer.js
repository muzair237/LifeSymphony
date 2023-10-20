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
        console.log(action?.payload?.user);
        (state.user = action.payload), (state.error = "");
        state.loading = false;
        state.errorMsg = false;
      })
      .addCase(loginUserReal.rejected, (state, action) => {
        state.error = action?.payload?.data;
        state.loading = false;
        state.isUserLogout = false;
        state.errorMsg = true;
      })
      
  },
});

// export const { apiError, loginSuccess, logoutUserSuccess, reset_login_flag } =
//   loginSlice.actions;

export default loginSlice.reducer;