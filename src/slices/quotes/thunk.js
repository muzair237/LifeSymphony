import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { GET_QUOTE } from "../../helpers/url_helper";
import axios from "axios";

export const getQuote = createAsyncThunk("quote/getQuote", async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/${GET_QUOTE}`
    );
    console.log(response);
    if (response?.success === true) {
      return response?.quote;
    } else {
      toast.error(response?.message);
    }
  } catch (error) {
    toast.error(error);
  }
});
