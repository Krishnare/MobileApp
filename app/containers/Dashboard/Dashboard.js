import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  DeviceEventEmitter
} from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItems";
import styles from "./styles";
import Header from "./../../components/Header/Header";
import { getSurveyData } from "./../../actions/surveyActions";
import Camera from "./../../components/Camera/Camera";
import EndSurveyModal from "./../../components/EndSurveyModal/EndSurveyModal";
import commonStyles from "./../../assets/constants/commonStyles";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorDetails: {},
      surveyList: {},
      success: false,
      isModalVisible: false
    };
  }
  _toggleModal = (isModalVisible, endSurvey) => {
    if (endSurvey) {
      Camera.killClass();
      DeviceEventEmitter.removeListener("CameraData", this.getExifData);
    }
    this.setState({ isModalVisible: isModalVisible });
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
      DeviceEventEmitter.removeListener("CameraData", this.getExifData);
      this.props.navigation.navigate("ConnectSuccessful", {
        exif: JSON.parse(exif)
      });
    }
  };
  componentDidMount() {
    this.props.getSurveyData();
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
  render() {
    return (
      <View style={styles.container}>
        <Header headerTitle={"Dashboard"} headerHeight={"small"} />
        <View style={styles.viewItem}>
          <View>
            <Text style={styles.cropSubHead}>Past Surveys</Text>
          </View>
          {this.state.surveyList.length === 0 ? (
            <View>
              <Text style={{ justifyContent: "center" }}>
                There are no records to Display
              </Text>
            </View>
          ) : (
            <FlatList
              data={this.props.survey.surveyList.reverse()}
              showsVerticalScrollIndicator={false}
              style={{ height: Dimensions.get("window").height - 210 }}
              renderItem={({ item, index }) => (
                <ListItem
                  key={index}
                  data={item}
                  navigation={this.props.navigation}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
        <View style={[styles.viewItem, styles.startSurveyHead]}>
          <TouchableOpacity onPress={() => this.openCamera()}>
            <Text
              style={[
                styles.startSurvey,
                commonStyles.boldFont,
                commonStyles.mediumFont
              ]}
            >
              Start Survey
            </Text>
          </TouchableOpacity>
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

const mapStateToProps = state => ({
  survey: state.survey
});
const mapDispatchToProps = {
  getSurveyData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
