import { createSlice } from "@reduxjs/toolkit";
import { getAllMovies, addAllMovies, updateMovies } from "./thunk";

export const initialState = {
    movies: [],
    error: "", // for error message
    isLoading: false,
    successMessage: "",
    getId: ""
};
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        getId: (state, action) => {
            state.getId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovies.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.movies = action.payload
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.isLoading = false,
                    state.movies = [],
                    state.error = action.payload
            })
            .addCase(addAllMovies.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(addAllMovies.fulfilled, (state, action) => {
                state.successMessage = action.payload;
                state.isLoading = false
            })
            .addCase(addAllMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.successMessage = action.payload;
            })
            .addCase(updateMovies.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(updateMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.successMessage = action.payload;
            })
            .addCase(updateMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.successMessage = action.payload;
            })
    }
});

export const { getId } = moviesSlice.actions;
export default moviesSlice.reducer;
