import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  DeviceEventEmitter
} from "react-native";
import styles from "./styles";
import logo from "./../../assets/images/logo.jpg";
import background from "./../../assets/images/welcome.png";
import commonStyles from "./../../assets/constants/commonStyles";
import Camera from "./../../components/Camera/Camera";
import EndSurveyModal from "./../../components/EndSurveyModal/EndSurveyModal";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
    DeviceEventEmitter.addListener("CameraData", this.getExifData);
  }
  _toggleModal = (isModalVisible, endSurvey) => {
    if (endSurvey) {
      Camera.killClass();
      DeviceEventEmitter.removeListener("CameraData", this.getExifData);
    }
    this.setState({ isModalVisible: isModalVisible });
  };
  getExifData = exif => {
    if (exif === "showModal") {
      this.setState({ isModalVisible: true });
    } else {
      DeviceEventEmitter.removeListener("CameraData", this.getExifData);
      this.props.navigation.navigate("ConnectSuccessful", {
        exif: JSON.parse(exif)
      });
    }
  };
  render() {
    return (
      <ImageBackground
        source={background}
        style={commonStyles.flexDisplayCenter}
      >
        <View style={commonStyles.flexDisplayCenter}>
          <Image style={[styles.logo]} source={logo} />
          <Text style={[styles.headerText, commonStyles.secondaryFontColor]}>
            N-Tester
          </Text>
          <View style={[styles.messageContainer]}>
            <Text style={[styles.message, commonStyles.secondaryFontColor]}>
              Find out your crop health to maximise yield and profit.
            </Text>
          </View>
          <View style={[styles.getStartBtnContainer]}>
            <TouchableOpacity
              onPress={() =>
                Camera.camera(
                  "Connect Clip",
                  "",
                  "Attach clip and adjust until center of light is in the circle",
                  true,
                  false
                )
              }
              style={[styles.getStartBtn, commonStyles.primaryBackgroundColor]}
            >
              <Text
                style={[
                  styles.getStartedBtnTxt,
                  commonStyles.secondaryFontColor
                ]}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
          <EndSurveyModal
            isModalVisible={this.state.isModalVisible}
            _toggleModal={this._toggleModal}
            navigation={this.props.navigation}
          />
        </View>
      </ImageBackground>
    );
  }
}
