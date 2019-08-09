import { GET_ALL_CROPS_DATA_SUCCESS } from "./types";
import { cropData } from "./../assets/constants/constants";

export const getCropData = () => {
  return dispatch => {
    dispatch({
      type: GET_ALL_CROPS_DATA_SUCCESS,
      payload: cropData ? cropData : {}
    });
  };
};
