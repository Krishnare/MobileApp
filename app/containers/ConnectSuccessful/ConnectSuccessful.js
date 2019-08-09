import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  DeviceEventEmitter,
  AsyncStorage
} from "react-native";
import Header from "./../../components/Header/Header";
import commonStyles from "./../../assets/constants/commonStyles";
import styles from "./styles";
import guideGreen from "./../../assets/images/guideGreen.png";
import EndSurveyModal from "./../../components/EndSurveyModal/EndSurveyModal";
import Camera from "./../../components/Camera/Camera";
import { luxCalculator } from "./../../assets/constants/constants";

export default class ConnectSuccessful extends Component {
  state = {
    isModalVisible: false
  };
  openCamera = () => {
    DeviceEventEmitter.addListener("CameraData", this.getExifData);
    Camera.camera(
      "Connect Clip",
      "",
      "Attach clip and adjust until center of light is in the circle",
      true,
      false
    );
  };
  getExifData = exif => {
    if (exif === "showModal") {
      this.setState({ isModalVisible: true });
    } else {
      this.setState({
        exif: JSON.parse(exif)
      });
      DeviceEventEmitter.removeListener("CameraData", this.getExifData);
    }
  };
  componentDidMount() {
    this.setState({
      exif: this.props.navigation.state.params.exif
    });
  }
  navigateToCropSelection = () => {
    let luxWithoutLeaf = luxCalculator(this.state.exif);
    AsyncStorage.setItem(
      "luxWithoutLeaf",
      JSON.stringify({ luxWithoutLeaf: luxWithoutLeaf })
    ).then(() => {
      this.props.navigation.navigate("CropDetails");
    });
  };
  _toggleModal = (isModalVisible, endSurvey) => {
    if (endSurvey) {
      Camera.killClass();
      DeviceEventEmitter.removeListener("CameraData", this.getExifData);
    }
    this.setState({ isModalVisible: isModalVisible });
  };
  render() {
    return (
      <View style={[commonStyles.flexDisplay]}>
        <Header headerTitle={"Connect Clip"} />
        <View style={[commonStyles.flexDisplayCenter]}>
          <Image style={[styles.topImgcontainer]} source={guideGreen} />
          <View style={[styles.successfulHeaderContainer]}>
            <Text
              style={[
                commonStyles.primaryFontColor,
                commonStyles.boldFont,
                styles.successfulHeaderTxt
              ]}
            >
              Connect Clip Successful
            </Text>
          </View>
          <View style={[styles.successfulMessageContainer]}>
            <Text style={[styles.successfulMessageTxt]}>
              Connect clip is successful! Click next to input crop details and
              start taking leaf samples
            </Text>
          </View>
          <View style={[styles.buttonContainer]}>
            <View>
              <TouchableOpacity
                style={[commonStyles.primaryBackgroundColor, styles.button]}
                onPress={() => this.navigateToCropSelection()}
              >
                <Text
                  style={[
                    commonStyles.secondaryFontColor,
                    commonStyles.boldFont,
                    styles.btnTxtCS
                  ]}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[
                  commonStyles.secondaryBackgroundColor,
                  styles.button,
                  styles.borderBtn
                ]}
                onPress={() => this.openCamera()}
              >
                <Text
                  style={[
                    commonStyles.primaryFontColor,
                    commonStyles.boldFont,
                    styles.btnTxtCS
                  ]}
                >
                  Retake
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.endSurveyContainer]}
                onPress={() => this._toggleModal(true)}
              >
                <Text
                  style={[
                    commonStyles.primaryFontColor,
                    styles.endSurveyTxt,
                    commonStyles.boldFont
                  ]}
                >
                  End Survey
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <EndSurveyModal
          isModalVisible={this.state.isModalVisible}
          _toggleModal={this._toggleModal}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
