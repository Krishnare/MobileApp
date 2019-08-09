import React, { Component } from "react";
import {
  Text,
  View,
  Picker,
  TouchableOpacity,
  Alert,
  DeviceEventEmitter,
  ScrollView
} from "react-native";
import DatePicker from "react-native-datepicker";
import Header from "./../../components/Header/Header";
import { monthNames, surveyCount } from "../../assets/constants/constants";
import { getCropData } from "./../../actions/cropActions";
import styles from "./styles";
import Camera from "./../../components/Camera/Camera";
import EndSurveyModal from "./../../components/EndSurveyModal/EndSurveyModal";
import commonStyles from "./../../assets/constants/commonStyles";
import { connect } from "react-redux";

class CropDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      maxDate: new Date(),
      plot: 0, //1= 1 Hectare, 2= 1-3 Hectares, 3= >3 Hectares
      cropType: 0,
      days: "",
      day: "",
      dateFormat: "",
      cropData: {},
      valid: false,
      cropDetails: {},
      isModalVisible: false,
      activeIndex: 0 //1=Long,2=Medium,3=Short
    };
  }
  componentDidMount() {
    this.props.getCropData();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.crop.error) {
      return {
        error: true,
        errorDetails: nextProps.crop.errorDetails
      };
    } else if (nextProps.crop.success) {
      return {
        cropData: nextProps.crop.cropData,
        success: true
      };
    }
    return null;
  }
  _toggleModal = (isModalVisible, endSurvey) => {
    if (endSurvey) {
      Camera.killClass();
      DeviceEventEmitter.removeListener("CameraData", this.getExifData);
    }
    this.setState({ isModalVisible: isModalVisible });
  };
  captureExifData = exif => {
    if (exif === "showModal") {
      this.setState({ isModalVisible: true });
    } else {
      DeviceEventEmitter.removeListener("CameraData", this.captureExifData);
      this.props.navigation.navigate("Survey", {
        cropDetails: { ...this.state.cropDetails, exif: JSON.parse(exif) }
      });
    }
  };
  openCamera = cropDetails => {
    this.setState({ cropDetails: cropDetails });
    DeviceEventEmitter.addListener("CameraData", this.captureExifData);
    Camera.camera(
      `Survey 1 of ${surveyCount}`,
      `1 of ${surveyCount}`,
      "",
      false,
      true
    );
  };
  toggleActive(activeIndex) {
    this.setState({
      activeIndex: activeIndex
    });
  }
  dateSelect(dateInput) {
    let oDateTwo = new Date();

    let parts = dateInput.split("/");
    //date today
    let dateone = new Date();
    let dd = dateone.getDate();
    let mm = dateone.getMonth() + 1; //January is 0!
    let yyyy = dateone.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    let today = dd + "/" + mm + "/" + yyyy;

    let dateSplit = today.split("/");
    let date = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    let dateFormat = `${dateSplit[0]} ${
      monthNames[parseInt(dateSplit[1]) - 1]
    } ${dateSplit[2]}`;

    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date.getTime();
    var date2_ms = oDateTwo.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms);

    // Convert back to days and return
    const count = Math.round(difference_ms / ONE_DAY);

    const day = new Date(dateone).getDay();
    if (count <= 20) {
      Alert.alert("Please select the date more than 20 days before");
    } else {
      this.setState({
        date: date,
        maxDate: today,
        valid: true,
        days: count,
        day: day,
        dateFormat: dateFormat
      });
    }
  }
  handleSubmit = () => {
    const { crop, cropVariety, day } = this.state.cropData;
    const props = {
      days: parseInt(this.state.days),
      growingPeriod: crop[this.state.activeIndex - 1],
      cropVariety: cropVariety[this.state.cropType - 1],
      day: day[this.state.day],
      date: this.state.dateFormat
    };
    return this.state.valid
      ? this.openCamera(props)
      : Alert.alert("Please select the date more than 20 days before");
  };
  render() {
    const { cropType, plot, activeIndex, cropData } = this.state;
    return (
      <View style={styles.container}>
        <Header headerTitle={"Crop Details"} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.viewItem}>
            <Text style={styles.cropSubHead}>Crop Details</Text>
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.itemLabel}>Crop Type</Text>
            <Picker style={styles.rice} selectedValue={"Rice"} enabled={false}>
              <Picker.Item
                style={styles.pickerItem}
                label="Rice"
                value="Rice"
                enabled={false}
              />
            </Picker>
            <View style={styles.underline} />
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.itemLabel}>Crop Variety</Text>
            <Picker
              style={styles.rice}
              selectedValue={cropType}
              onValueChange={(val, index) => this.setState({ cropType: val })}
            >
              <Picker.Item
                style={styles.pickerItem}
                label="Select Crop Variety"
                value={0}
              />
              <Picker.Item
                style={styles.pickerItem}
                label="Traditional"
                value={1}
              />
              <Picker.Item
                style={styles.pickerItem}
                label="Aromatic"
                value={2}
              />
              <Picker.Item style={styles.pickerItem} label="Hybrid" value={3} />
            </Picker>
            <View style={styles.underline} />
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.itemLabel}>Sowing Date</Text>
            <DatePicker
              style={styles.datePicker}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              maxDate={this.state.maxDate}
              iconSource={{}}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  paddingVertical: 10
                }
              }}
              onDateChange={date => this.dateSelect(date)}
            />
            <View style={styles.underline} />
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.itemLabel}>Growing Period</Text>
            <View
              style={{ flex: 1, flexDirection: "row", paddingVertical: 20 }}
            >
              <TouchableOpacity onPress={() => this.toggleActive(1)}>
                <Text
                  style={[
                    styles.longBtn,
                    styles.btnCommon,
                    { flex: 1 },
                    activeIndex === 1 ? styles.activeIndex : ""
                  ]}
                >
                  Long
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.toggleActive(2)}>
                <Text
                  style={[
                    styles.btnCommon,
                    { flex: 1 },
                    activeIndex === 2 ? styles.activeIndex : ""
                  ]}
                >
                  Medium
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.toggleActive(3)}>
                <Text
                  style={[
                    styles.shortBtn,
                    styles.btnCommon,
                    { flex: 1 },
                    activeIndex === 3 ? styles.activeIndex : ""
                  ]}
                >
                  Short
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.itemLabel}>Plot Size</Text>
            <Picker
              selectedValue={plot}
              style={styles.rice}
              onValueChange={itemValue => this.setState({ plot: itemValue })}
            >
              <Picker.Item
                style={styles.pickerItem}
                label={`Select Plot Size`}
                value={0}
              />
              <Picker.Item
                style={styles.pickerItem}
                label={
                  Object.keys(cropData).length > 0 ? cropData.plotSize[0] : ""
                }
                value={1}
              />
              <Picker.Item
                style={styles.pickerItem}
                label={
                  Object.keys(cropData).length > 0 ? cropData.plotSize[1] : ""
                }
                value={2}
              />
              <Picker.Item
                style={styles.pickerItem}
                label={
                  Object.keys(cropData).length > 0 ? cropData.plotSize[2] : ""
                }
                value={3}
              />
            </Picker>
            <View style={styles.underline} />
          </View>
          {cropType !== 0 && plot !== 0 && activeIndex !== 0 ? (
            <View style={[styles.viewItem, { paddingVertical: 30 }]}>
              <TouchableOpacity onPress={this.handleSubmit}>
                <Text
                  style={[
                    styles.takeLeafBtn,
                    commonStyles.boldFont,
                    commonStyles.mediumFont
                  ]}
                >
                  Take Leaf Samples
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={[styles.viewItem, { paddingVertical: 30 }]}>
              <TouchableOpacity disabled={true}>
                <Text
                  style={[
                    styles.takeLeafBtn,
                    { backgroundColor: "#dfe6e9", color: "#636e72" },
                    commonStyles.boldFont,
                    commonStyles.mediumFont
                  ]}
                >
                  Take Leaf Samples
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <EndSurveyModal
            isModalVisible={this.state.isModalVisible}
            _toggleModal={this._toggleModal}
            navigation={this.props.navigation}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  crop: state.crop
});
const mapDispatchToProps = {
  getCropData
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CropDetails);
