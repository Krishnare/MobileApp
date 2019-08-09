import { AsyncStorage } from "react-native";
import {
  GET_SURVEY_RESULT,
  GET_SURVEY_RESULT_SUCCESS,
  GET_SURVEY_RESULT_FAILURE,
  GET_ALL_SURVEY,
  GET_ALL_SURVEY_SUCCESS,
  GET_ALL_SURVEY_FAILURE,
  CLEAR_SURVEY_RESULT
} from "./types";
import {
  dateRange,
  spadCalculator,
  spadRange,
  calculateDegree
} from "./../assets/constants/constants";
import data from "./../assets/constants/data";

export const getSurveyResult = lux => {
  return dispatch => {
    dispatch({ type: GET_SURVEY_RESULT });
    let spadScore = spadCalculator(lux);
    let gaugeAngle =
      spadScore <= 0
        ? 0
        : spadScore > 600
        ? 180
        : calculateDegree({
            spadScore: spadScore,
            cropVariety: lux.cropDetails.cropVariety
          });
    let surveyResult = {
      date: lux.cropDetails.date,
      day: lux.cropDetails.day,
      gaugeAngle: gaugeAngle
    };
    let val =
      lux.cropDetails.days > dateRange[lux.cropDetails.growingPeriod]["mid"]
        ? "greater"
        : "lesser";
    let arrIndex =
      spadScore < spadRange[lux.cropDetails.cropVariety]["min"]
        ? 0
        : spadScore >= spadRange[lux.cropDetails.cropVariety]["min"] &&
          spadScore <= spadRange[lux.cropDetails.cropVariety]["max"]
        ? 1
        : 2;
    let nitrogenLevel =
      spadScore < spadRange[lux.cropDetails.cropVariety]["min"]
        ? ((spadRange[lux.cropDetails.cropVariety]["min"] - spadScore) /
            spadRange[lux.cropDetails.cropVariety]["min"]) *
          100
        : spadScore >= spadRange[lux.cropDetails.cropVariety]["min"] &&
          spadScore <= spadRange[lux.cropDetails.cropVariety]["max"]
        ? 0
        : ((spadScore - spadRange[lux.cropDetails.cropVariety]["max"]) /
            spadRange[lux.cropDetails.cropVariety]["max"]) *
          100;
    let surveyData = data["short"][lux.cropDetails.cropVariety][val][arrIndex];
    surveyResult = {
      ...surveyResult,
      surveyData,
      nitrogenLevel: nitrogenLevel.toFixed(0)
    };
    return AsyncStorage.getItem("surveyData").then(data => {
      AsyncStorage.setItem(
        "surveyData",
        data
          ? JSON.stringify(JSON.parse(data).concat(surveyResult))
          : JSON.stringify([surveyResult])
      )
        .then(() => {
          dispatch({
            type: GET_SURVEY_RESULT_SUCCESS,
            payload: surveyResult
          });
        })
        .catch(error => {
          dispatch({ type: GET_SURVEY_RESULT_FAILURE, error: error });
        });
    });
  };
};
export const getSurveyData = () => {
  return dispatch => {
    dispatch({ type: GET_ALL_SURVEY });
    return AsyncStorage.getItem("surveyData")
      .then(surveys => {
        dispatch({
          type: GET_ALL_SURVEY_SUCCESS,
          payload: surveys ? JSON.parse(surveys) : []
        });
      })
      .catch(error => {
        dispatch({ type: GET_ALL_SURVEY_FAILURE, error: error });
      });
  };
};
export const clearSurveyResult = () => {
  return dispatch => {
    dispatch({ type: CLEAR_SURVEY_RESULT });
  };
};
