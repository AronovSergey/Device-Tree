import axios from "axios";
import { FETCH_ROOT, FETCH_ROOT_ERROR, IS_ROOT_LOADING } from "./types";
import { showNotification } from "./../UI/notificationToast";

export const fetchRoot = () => (dispatch) => {
  dispatch({ type: IS_ROOT_LOADING });
  axios
    .get("http://localhost:8080/api/v1.0/tree")
    .then((response) => {
      dispatch({ type: FETCH_ROOT, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      if (error.response) showNotification(error.response.data, "error");
      dispatch({ type: FETCH_ROOT_ERROR });
    });
};
