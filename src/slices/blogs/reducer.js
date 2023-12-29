import { createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./thunk";
export const initialState = {
  blogs: {},
  loading: false,
  isError: false,
  errorMsg: "",
};
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //GET blogs
      .addCase(getBlogs.pending, (state, action) => {
        (state.blogs = {}), (state.isError = false);
        state.loading = true;
        state.errorMsg = "";
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        (state.blogs = action.payload), (state.isError = false);
        state.loading = false;
        state.errorMsg = "";
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.errorMsg = "An Error Occured in Fetching Blogs!";
      });
  },
});

export default blogsSlice.reducer;
