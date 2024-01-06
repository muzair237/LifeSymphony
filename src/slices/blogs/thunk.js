import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

export const getBlogs = createAsyncThunk('blogs/getBlogs', async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/blog`);
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
