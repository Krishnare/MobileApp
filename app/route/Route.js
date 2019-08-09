import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import WelcomeScreen from "./../containers/WelcomeScreen/WelcomeScreen";
import ConnectSuccessful from "./../containers/ConnectSuccessful/ConnectSuccessful";
import Dashboard from "./../containers/Dashboard/Dashboard";
import CropDetails from "./../containers/CropDetails/CropDetails";
import SplashScreen from "./../containers/SplashScreen/SplashScreen";
import Survey from "./../containers/Survey/Survey";
import SurveyResult from "./../containers/SurveyResult/SurveyResult";

export default class Route extends Component {
  render() {
    return <AppContainer />;
  }
}
const Main = createStackNavigator(
  {
    WelcomeScreen: { screen: WelcomeScreen }
  },
  {
    headerMode: "none",
    navigationOptions: {
      header: null
    }
  }
);
const AppSwitchNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    Welcome: { screen: WelcomeScreen },
    ConnectSuccessful: { screen: ConnectSuccessful },
    Dashboard: { screen: Dashboard },
    CropDetails: { screen: CropDetails },
    Survey: { screen: Survey },
    SurveyResult: { screen: SurveyResult }
  },
  {
    headerMode: "none",
    gesturesEnabled: false,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  }
);
const AppContainer = createAppContainer(AppSwitchNavigator);
