import { createSlice } from "@reduxjs/toolkit";
import { getAllSeries, addAllSeries, updateSeries } from "./thunk";

export const initialState = {
    series: [],
    error: "", // for error message
    isLoading: false,
    successMessage: "",
    getId: ""
};
const seriesSlice = createSlice({
    name: "series",
    initialState,
    reducers: {
        getId: (state, action) => {
            state.getId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllSeries.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getAllSeries.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.series = action.payload
            })
            .addCase(getAllSeries.rejected, (state, action) => {
                state.isLoading = false,
                    state.series = [],
                    state.error = action.payload
            })
            .addCase(addAllSeries.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(addAllSeries.fulfilled, (state, action) => {
                state.successMessage = action.payload;
                state.isLoading = false
            })
            .addCase(addAllSeries.rejected, (state, action) => {
                state.isLoading = false;
                state.successMessage = action.payload;
            })
            .addCase(updateSeries.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(updateSeries.fulfilled, (state, action) => {
                state.isLoading = false;
                state.successMessage = action.payload;
            })
            .addCase(updateSeries.rejected, (state, action) => {
                state.isLoading = false;
                state.successMessage = action.payload;
            })
    }
});

export const { getId } = seriesSlice.actions;
export default seriesSlice.reducer;
