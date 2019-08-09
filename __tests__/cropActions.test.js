import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { GET_ALL_CROPS_DATA_SUCCESS } from "../app/actions/types";
import expect from "expect";
import { cropData } from "../app/assets/constants/constants";

const getCropData = () => ({
  type: GET_ALL_CROPS_DATA_SUCCESS,
  paylod: cropData
});

const middlewares = [thunk];

// Create a mock store
const mockStore = configureMockStore(middlewares);
const store = mockStore({ cropData: [] });

describe("action creators", () => {
  it("creates GET_ALL_CROPS_DATA_SUCCESS when fetching data was successful", () => {
    store.dispatch(getCropData());
    expect(store.getActions()).toMatchSnapshot();
  });
});
