import { createAsyncThunk } from "@reduxjs/toolkit";
import {services} from "./services"

export const getAllMovies = createAsyncThunk(
    "movies/getAllMovies",
    async () => {
        try {
            return await services.getMovies();
        } catch (error) {
            
        }
    }
)
export const addAllMovies = createAsyncThunk(
    "movies/addMovies",
    async (data) => {
        try {
            return await services.addMovies(data);
        } catch (error) {

        }
    }
)
export const updateMovies = createAsyncThunk(
    "movies/updateMovies",
    async (data) => {
        try {
            return await services.updateMovies(data);
        } catch (error) {

        }
    }
)
export const deleteMovies = createAsyncThunk(
    "movies/deleteMovies",
    async (id) => {
        try {
            return await services.deleteMovies(id);
        } catch (error) {

        }
    }
)