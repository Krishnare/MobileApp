import React, { Component } from "react";
import { View, Image, Text, AsyncStorage } from "react-native";
import commonStyles from "./../../assets/constants/commonStyles";
import logo from "./../../assets/images/logo.jpg";
import styles from "./styles";
import { connect } from "react-redux";
import { getSurveyData } from "./../../actions/surveyActions";

class SplashScreen extends Component {
  state = {
    success: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.props.getSurveyData();
    }, 1000);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.survey.error) {
      return {
        error: true,
        errorDetails: nextProps.survey.errorDetails
      };
    } else if (nextProps.survey.success) {
      return {
        surveyList: nextProps.survey.surveyList,
        success: true
      };
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.success !== prevState.success) {
      if (this.state.surveyList.length > 0) {
        this.props.navigation.navigate("Dashboard");
      } else {
        this.props.navigation.navigate("Welcome");
      }
    }
  }
  render() {
    return (
      <View
        style={[
          commonStyles.flexDisplayCenter,
          commonStyles.primaryBackgroundColor
        ]}
      >
        <Image style={[styles.logo]} source={logo} />
        <Text style={[styles.headerText, commonStyles.secondaryFontColor]}>
          N-Tester
        </Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  survey: state.survey
});
const mapDispatchToProps = {
  getSurveyData
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
