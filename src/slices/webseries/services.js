import axios from "axios"
import { toast } from "react-toastify";
import {
  GET_ALL_SERIES,
  ADD_SERIES,
  UPDATE_SERIES,
  DELETE_SERIES
  
} from "../../helpers/url_helper"

const getSeries = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_USER_URL}/${GET_ALL_SERIES}`
    )
    if (response) {
      return response;
    }

  } catch (error) {
    toast.error(error.message, { theme: "colored" });
  }
}

const addSeries = async (data) => {
  try {
    const response = await toast.promise(
      axios.post(
        `${process.env.REACT_APP_USER_URL}/${ADD_SERIES}`,data,
      ),
      {
        pending: 'Inserting Series...',
        success: 'Series Inserted Successfully!',
        error: 'Failed to Insert Series!',
      }
    );
  } catch (error) {
    toast.error(error.message, { theme: "colored" });
  }
};
const updateSeries = async (data) => {
  try {
    const response = await toast.promise(
      axios.put(
        `${process.env.REACT_APP_USER_URL}/${UPDATE_SERIES}/${data._id}`,data,
      ),
      {
        pending: 'Updating Series...',
        success: 'Series Updated Successfully!',
        error: 'Failed to Update Series!',
      }
    );
  } catch (error) {
    toast.error(error.message, { theme: "colored" });
  }
};
const deleteSeries = async (id) => {
  try {
    const response = await toast.promise(
      axios.delete(
        `${process.env.REACT_APP_USER_URL}/${DELETE_SERIES}/${id}`,
      ),
      {
        pending: 'Deleting Series...',
        success: 'Series Deleted Successfully!',
        error: 'Failed to Delete Series!',
      }
    );
  } catch (error) {
    toast.error(error.message, { theme: "colored" });
  }
};



export const services = {
  getSeries,
  addSeries,
  updateSeries,
  deleteSeries
}