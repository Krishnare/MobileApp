import cropReducer from "../app/reducers/cropReducer";
import { GET_ALL_CROPS_DATA_SUCCESS } from "../app/actions/types";

describe("Crop Reducer", () => {
  const initialState = {
    loading: false,
    success: false,
    error: false,
    errorDetails: {},
    cropData: []
  };
  it("should return the initial state", () => {
    expect(cropReducer(undefined, {})).toEqual(initialState);
  });
  it("Should handle GET_SURVEY_RESULT_SUCCESS", () => {
    const inputAction = {
      cropData: ["some data"],
      success: true
    };
    expect(
      cropReducer(
        {},
        {
          type: GET_ALL_CROPS_DATA_SUCCESS,
          payload: inputAction.cropData
        }
      )
    ).toEqual({
      loading: false,
      success: true,
      error: false,
      cropData: ["some data"]
    });
  });
});
