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

export const logoutUser = createAsyncThunk("logout/logoutUser", async ({navigate}) => {
  try {
    return await service.getLogout(navigate);
  } catch (error) {}
});

