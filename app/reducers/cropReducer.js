import { GET_ALL_CROPS_DATA_SUCCESS } from "./../actions/types";
const initialState = {
  loading: false,
  success: false,
  error: false,
  errorDetails: {},
  cropData: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CROPS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        cropData: action.payload
      };
    default:
      return state;
  }
}
