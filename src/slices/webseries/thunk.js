import { createAsyncThunk } from "@reduxjs/toolkit";
import {services} from "./services"

export const getAllSeries = createAsyncThunk(
    "series/getAllSeries",
    async () => {
        try {
            return await services.getSeries();
        } catch (error) {
            
        }
    }
)
export const addAllSeries = createAsyncThunk(
    "series/addAllSeries",
    async (data) => {
        try {
            return await services.addSeries(data);
        } catch (error) {

        }
    }
)
export const updateSeries = createAsyncThunk(
    "series/updateSeries",
    async (data) => {
        try {
            return await services.updateSeries(data);
        } catch (error) {

        }
    }
)
export const deleteSeries = createAsyncThunk(
    "series/updateSeries",
    async (id) => {
        try {
            return await services.deleteSeries(id);
        } catch (error) {

        }
    }
)