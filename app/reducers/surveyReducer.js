import {
  GET_SURVEY_RESULT,
  GET_SURVEY_RESULT_SUCCESS,
  GET_SURVEY_RESULT_FAILURE,
  GET_ALL_SURVEY,
  GET_ALL_SURVEY_SUCCESS,
  GET_ALL_SURVEY_FAILURE,
  CLEAR_SURVEY_RESULT
} from "./../actions/types";
const initialState = {
  surveyResult: {},
  loading: false,
  success: false,
  error: false,
  errorDetails: {},
  surveyList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SURVEY_RESULT:
      return {
        ...state,
        loading: true
      };
    case GET_SURVEY_RESULT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        surveyResult: action.payload
      };
    case GET_SURVEY_RESULT_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        errorDetails: action.error
      };
    case GET_ALL_SURVEY:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_SURVEY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        surveyList: action.payload,
        surveyResult: {}
      };
    case GET_ALL_SURVEY_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        errorDetails: action.error
      };
    case CLEAR_SURVEY_RESULT:
      return {
        ...state,
        surveyResult: {}
      };
    default:
      return state;
  }
}
