import React, { Component } from "react";
import {
  View,
  DeviceEventEmitter,
  AsyncStorage,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import Header from "./../../components/Header/Header";
import commonStyles from "./../../assets/constants/commonStyles";
import { surveyCount, luxCalculator } from "./../../assets/constants/constants";
import CaptureView from "./../../components/CaptureView/CaptureView";
import { getSurveyResult } from "./../../actions/surveyActions";
import Camera from "./../../components/Camera/Camera";
import EndSurveyModal from "./../../components/EndSurveyModal/EndSurveyModal";
import styles from "./styles";

export class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenView: 2, //1-Camera,2-Capture
      exifData: [],
      error: false,
      errorDetails: {},
      surveyResult: {},
      success: false,
      exif: {},
      isModalVisible: false,
      withoutLeaf: 0,
      withLeaf: 0
    };
  }
  _toggleModal = (isModalVisible, endSurvey) => {
    if (endSurvey) {
      Camera.killClass();
      DeviceEventEmitter.removeListener("CameraData", this.getExifData);
    }
    this.setState({ isModalVisible: isModalVisible });
  };
  componentDidMount() {
    AsyncStorage.getItem("luxWithoutLeaf").then(luxWithoutLeaf => {
      let lux = luxCalculator(
        this.props.navigation.state.params.cropDetails.exif
      );
      this.setState({
        exif: this.props.navigation.state.params.cropDetails.exif,
        exifData: [],
        withoutLeaf: JSON.parse(luxWithoutLeaf).luxWithoutLeaf,
        withLeaf: lux
      });
    });
    DeviceEventEmitter.addListener("CameraData", this.captureExifData);
  }
  storeExifData = () => {
    let exifData = this.state.exifData;
    let lux = luxCalculator(this.state.exif);
    exifData.push(lux);
    this.setState({
      exifData: exifData,
      withLeaf: 0
    });
    Camera.camera(
      `Survey ${this.state.exifData.length + 1} of ${surveyCount}`,
      `${this.state.exifData.length + 1} of ${surveyCount}`,
      "",
      false,
      this.state.exifData.length + 1 === surveyCount ? false : true
    );
  };
  captureExifData = exif => {
    if (exif === "showModal") {
      this.setState({ isModalVisible: true });
    } else {
      let lux = luxCalculator(JSON.parse(exif));
      this.setState({
        exif: JSON.parse(exif),
        withLeaf: lux
      });
    }
  };
  retakeImage = () => {
    this.setState({
      exif: {},
      withLeaf: 0
    });
    Camera.camera(
      `Survey ${this.state.exifData.length + 1} of ${surveyCount}`,
      `${this.state.exifData.length + 1} of ${surveyCount}`,
      "",
      false,
      this.state.exifData.length + 1 === surveyCount ? false : true
    );
  };
  getSurveyResult = () => {
    let totalLux = this.state.exifData.reduce((total, value) => total + value);
    let exif = {
      withoutLeaf: this.state.withoutLeaf,
      withLeaf: totalLux / surveyCount,
      cropDetails: this.props.navigation.state.params.cropDetails
    };
    this.props.getSurveyResult(exif);
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.survey.error) {
      return {
        error: true,
        errorDetails: nextProps.survey.errorDetails
      };
    } else if (nextProps.survey.success) {
      return {
        surveyResult: nextProps.survey.surveyResult,
        success: true
      };
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (Object.keys(this.state.surveyResult).length > 0 && this.state.success) {
      DeviceEventEmitter.removeListener("CameraData", this.captureExifData);
      this.props.navigation.navigate("SurveyResult", {
        surveyResult: this.state.surveyResult
      });
    }
  }
  render() {
    return (
      <View style={[commonStyles.flexDisplay]}>
        <Header
          headerTitle={`Survey ${this.state.exifData.length +
            1} of ${surveyCount}`}
          navigation={this.props.navigation}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <CaptureView
            payload={{
              navigation: this.props.navigation,
              surveyCount: this.state.exifData.length + 1,
              storeExifData: this.storeExifData,
              retakeImage: this.retakeImage,
              getSurveyResult: this.getSurveyResult,
              leafDetails: {
                withoutLeaf: this.state.withoutLeaf,
                withLeaf: this.state.withLeaf
              }
            }}
          />
        </ScrollView>
        <EndSurveyModal
          isModalVisible={this.state.isModalVisible}
          _toggleModal={this._toggleModal}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  survey: state.survey
});
const mapDispatchToProps = {
  getSurveyResult
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Survey);
