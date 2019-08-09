import React, { Component } from "react";
import Route from "./route/Route";
import store from "./store";
import { Provider } from "react-redux";
import { BackHandler } from "react-native";

export default class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }
  handleBackPress = () => {
    return false;
  };
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
