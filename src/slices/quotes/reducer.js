import { createSlice } from "@reduxjs/toolkit";
import { getQuote } from "./thunk";
export const initialState = {
  quote: {},
  loading: false,
  isError: false,
  errorMsg: "",
};
const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //GET QUOTE
      .addCase(getQuote.pending, (state, action) => {
        (state.quote = {}), (state.isError = false);
        state.loading = true;
        state.errorMsg = "";
      })
      .addCase(getQuote.fulfilled, (state, action) => {
        (state.quote = action.payload), (state.isError = false);
        state.loading = false;
        state.errorMsg = "";
      })
      .addCase(getQuote.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.errorMsg = "An Error Occured in Fetching Quote!";
      });
  },
});

export default quoteSlice.reducer;
