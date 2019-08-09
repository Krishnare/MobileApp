import React from "react";
import surveyReducer from "../app/reducers/surveyReducer";
import {
  GET_SURVEY_RESULT,
  GET_SURVEY_RESULT_SUCCESS,
  GET_SURVEY_RESULT_FAILURE,
  GET_ALL_SURVEY,
  GET_ALL_SURVEY_SUCCESS,
  GET_ALL_SURVEY_FAILURE,
  CLEAR_SURVEY_RESULT
} from "../app/actions/types";
describe("Survey", () => {
  const initialState = {
    surveyResult: {},
    loading: false,
    success: false,
    error: false,
    errorDetails: {},
    surveyList: []
  };
  it("should return the initial state", () => {
    expect(surveyReducer(undefined, {})).toEqual(initialState);
  });
  it("Should handle GET_SURVEY_RESULT", () => {
    expect(
      surveyReducer({}, { type: GET_SURVEY_RESULT, loading: true })
    ).toEqual({
      loading: true
    });
  });
  it("Should handle GET_SURVEY_RESULT_SUCCESS", () => {
    const inputAction = {
      surveyResult: { data: "some data" },
      success: true
    };
    expect(
      surveyReducer(
        {},
        {
          type: GET_SURVEY_RESULT_SUCCESS,
          payload: inputAction.surveyResult.data
        }
      )
    ).toEqual({
      loading: false,
      success: true,
      surveyResult: "some data"
    });
  });
  it("Should handle GET_SURVEY_RESULT_FAILURE", () => {
    expect(
      surveyReducer(undefined, {
        type: GET_SURVEY_RESULT_FAILURE,
        error: { error: "Failed" }
      })
    ).toEqual({
      loading: false,
      success: false,
      error: true,
      surveyList: [],
      surveyResult: {},
      errorDetails: { error: "Failed" }
    });
  });
  it("Should handle GET_ALL_SURVEY", () => {
    expect(surveyReducer({}, { type: GET_ALL_SURVEY, loading: true })).toEqual({
      loading: true
    });
  });
  it("Should handle GET_ALL_SURVEY_SUCCESS", () => {
    const inputAction = {
      loading: false,
      success: true,
      error: false,
      surveyList: { data: "data" },
      surveyResult: {}
    };
    expect(
      surveyReducer(
        {},
        {
          type: GET_ALL_SURVEY_SUCCESS,
          payload: inputAction.surveyList.data
        }
      )
    ).toEqual({
      loading: false,
      error: false,
      success: true,
      surveyList: "data",
      surveyResult: {}
    });
  });
  it("Should handle GET_ALL_SURVEY_FAILURE", () => {
    expect(
      surveyReducer(undefined, {
        type: GET_ALL_SURVEY_FAILURE,
        error: { error: "Failed" }
      })
    ).toEqual({
      loading: false,
      success: false,
      error: true,
      surveyList: [],
      surveyResult: {},
      errorDetails: { error: "Failed" }
    });
  });

  it("Should handle CLEAR_SURVEY_RESULT", () => {
    expect(surveyReducer({}, { type: CLEAR_SURVEY_RESULT })).toEqual({
      surveyResult: {}
    });
  });
});
