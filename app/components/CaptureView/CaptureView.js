import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import commonStyles from "./../../assets/constants/commonStyles";
import { surveyCount } from "./../../assets/constants/constants";
import EndSurveyModal from "./../../components/EndSurveyModal/EndSurveyModal";
import leaf from "./../../assets/images/leaf.png";

export default class CaptureView extends Component {
  state = {
    modalVisible: false
  };
  _toggleModal = isModalVisible =>
    this.setState({ isModalVisible: isModalVisible });
  render() {
    return (
      <View style={[commonStyles.flexDisplay]}>
        <View style={[commonStyles.flexDisplayCenter]}>
          <Image style={[styles.topImgcontainer]} source={leaf} />
          <View style={[styles.successfulHeaderContainer]}>
            <Text
              style={[
                commonStyles.primaryFontColor,
                commonStyles.boldFont,
                styles.successfulHeaderTxt
              ]}
            >
              Survey {this.props.payload.surveyCount} of {surveyCount} Captured
            </Text>
          </View>
          <View style={[styles.successfulMessageContainer]}>
            <Text
              style={[styles.successfulMessageTxt, commonStyles.fontFamily]}
            >
              {this.props.payload.surveyCount === surveyCount
                ? "Survey completed. Submit survey to get your crop results!"
                : "Continue taking leaf samples."}
            </Text>
          </View>
          <View style={[styles.buttonContainer]}>
            {this.props.payload.surveyCount === surveyCount ? (
              <View>
                <TouchableOpacity
                  style={[commonStyles.primaryBackgroundColor, styles.button]}
                  onPress={() => this.props.payload.getSurveyResult()}
                >
                  <Text
                    style={[
                      commonStyles.secondaryFontColor,
                      commonStyles.boldFont,
                      styles.btnTxtCS
                    ]}
                  >
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  style={[commonStyles.primaryBackgroundColor, styles.button]}
                  onPress={() => this.props.payload.storeExifData()}
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
            )}
            <View>
              <TouchableOpacity
                style={[
                  commonStyles.secondaryBackgroundColor,
                  styles.button,
                  styles.borderBtn
                ]}
                onPress={() => this.props.payload.retakeImage()}
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
            {this.props.payload.surveyCount !== surveyCount ? (
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
            ) : null}
          </View>
          <View style={[styles.leafData]}>
            <Text
              style={[
                commonStyles.primaryFontColor,
                commonStyles.xxSmallFont,
                commonStyles.boldFont
              ]}
            >
              {`without leaf : ${
                this.props.payload.leafDetails.withoutLeaf.toFixed(2)
              }, with leaf(${
                this.props.payload.surveyCount
              }/${surveyCount}) : ${this.props.payload.leafDetails.withLeaf.toFixed(2)}`}
            </Text>
          </View>
        </View>
        <EndSurveyModal
          isModalVisible={this.state.isModalVisible}
          _toggleModal={this._toggleModal}
          navigation={this.props.payload.navigation}
        />
      </View>
    );
  }
}
