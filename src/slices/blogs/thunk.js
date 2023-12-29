import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { GET_BLOGS } from "../../helpers/url_helper";
import axios from "axios";

export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/${GET_BLOGS}`
    );
    console.log(response);
    if (response?.success === true) {
      return response?.blogs;
    } else {
      toast.error(response?.message);
    }
  } catch (error) {
    toast.error(error);
  }
});
