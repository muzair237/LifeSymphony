import axios from "axios"
import { toast } from "react-toastify";
import {
  GET_ALL_MOVIES,
  ADD_MOVIES,
  UPDATE_MOVIES,
  DELETE_MOVIES
  
} from "../../helpers/url_helper"

const getMovies = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_USER_URL}/${GET_ALL_MOVIES}`
    )
    if (response) {
      return response;
    }

  } catch (error) {
    toast.error(error.message, { theme: "colored" });
  }
}

const addMovies = async (data) => {
  try {
    const response = await toast.promise(
      axios.post(
        `${process.env.REACT_APP_USER_URL}/${ADD_MOVIES}`,data,
      ),
      {
        pending: 'Inserting Movie...',
        success: 'Movie Inserted Successfully!',
        error: 'Failed to Insert Movie!',
      }
    );
  } catch (error) {
    toast.error(error.message, { theme: "colored" });
  }
};
const updateMovies = async (data) => {
  try {
    const response = await toast.promise(
      axios.put(
        `${process.env.REACT_APP_USER_URL}/${UPDATE_MOVIES}/${data._id}`,data,
      ),
      {
        pending: 'Updating Movie...',
        success: 'Movie Updated Successfully!',
        error: 'Failed to Update Movie!',
      }
    );
  } catch (error) {
    toast.error(error.message, { theme: "colored" });
  }
};
const deleteMovies = async (id) => {
  try {
    const response = await toast.promise(
      axios.delete(
        `${process.env.REACT_APP_USER_URL}/${DELETE_MOVIES}/${id}`,
      ),
      {
        pending: 'Deleting Movie...',
        success: 'Movie Deleted Successfully!',
        error: 'Failed to Delete Movie!',
      }
    );
  } catch (error) {
    toast.error(error.message, { theme: "colored" });
  }
};



export const services = {
  getMovies,
  addMovies,
  updateMovies,
  deleteMovies
}