import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import bag from "./../../assets/images/bag.png";
import bug from "./../../assets/images/bug.png";
import commonStyles from "./../../assets/constants/commonStyles";
import styles from "./styles";
import Header from "./../../components/Header/Header";
import Gauge from "./../../components/Gauge/Gauge";
import { connect } from "react-redux";
import {
  clearSurveyResult,
  getSurveyData
} from "./../../actions/surveyActions";
import HTMLView from "react-native-htmlview";
import Modal from "react-native-modal";

class SurveyResult extends Component {
  state = {
    isVisible: false
  };
  clearSurveyResults = () => {
    this.props.clearSurveyResult();
    this.props.getSurveyData();
    this.props.navigation.navigate("Dashboard");
  };
  renderModalView = () => {
    let data = this.props.navigation.state.params.surveyResult.surveyData
      .popupDetails;
    return data.map((item, index) => {
      return (
        <View key={index}>
          <View>
            <Text style={[commonStyles.largeFont, commonStyles.boldFont]}>
              {item.popupHeader}
            </Text>
          </View>
          <View style={[styles.list]}>
            {item.popupList.map((liItem, liIndex) => {
              return (
                <Text
                  style={[commonStyles.xSmallFont, commonStyles.blackFontColor]}
                  key={liIndex}
                >{`${liIndex + 1}. ${liItem}`}</Text>
              );
            })}
          </View>
        </View>
      );
    });
  };
  render() {
    const data = this.props.navigation.state.params.surveyResult.surveyData;
    const gaugeAngle = this.props.navigation.state.params.surveyResult
      .gaugeAngle;
    const nitrogenLevel = this.props.navigation.state.params.surveyResult
      .nitrogenLevel;
    return (
      <View style={[commonStyles.flexDisplay]}>
        <Header headerTitle={"Survey"} headerHeight={"small"} />
        <ScrollView>
          <View style={[styles.headerTxtContainer]}>
            <Text
              style={[
                commonStyles.primaryFontColor,
                styles.headerTxt,
                commonStyles.boldFont
              ]}
            >
              Results
            </Text>
          </View>
          <View style={[commonStyles.flexDisplayCenter]}>
            <View style={[styles.marginBottom]}>
              <Text
                style={[
                  commonStyles.primaryFontColor,
                  commonStyles.boldFont,
                  commonStyles.textAlignCenter,
                  commonStyles.largeFont
                ]}
              >
                {data.cropHealth}
              </Text>
              <Text
                style={[
                  commonStyles.primaryFontColor,
                  commonStyles.textAlignCenter,
                  commonStyles.mediumFont
                ]}
              >
                {`${data.nitrogenLevel.part1}${
                  nitrogenLevel == 0 ? `` : ` ${nitrogenLevel}%`
                } ${data.nitrogenLevel.part2}`}
              </Text>
            </View>
            <View
              style={[
                styles.marginBottom,
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }
              ]}
            >
              <Gauge
                size={250}
                value={gaugeAngle}
                minValue={0}
                maxValue={180}
              />
            </View>
            <View style={[styles.marginBottom]}>
              <Text
                style={[
                  commonStyles.smallFont,
                  commonStyles.textAlignCenter,
                  commonStyles.blackFontColor
                ]}
              >
                {data.daysCount}
              </Text>
            </View>
            <View style={[styles.informationContainer, styles.marginBottom]}>
              <View
                style={[commonStyles.flexDirectionRow, styles.marginBottom]}
              >
                <View
                  style={[commonStyles.flexDisplay, { paddingVertical: 10 }]}
                >
                  <Image source={bag} style={[styles.imgBag]} />
                </View>
                <View style={[styles.informationTxtContainer]}>
                  <View style={[commonStyles.flexDisplay]}>
                    <Text
                      style={[
                        commonStyles.primaryFontColor,
                        commonStyles.mediumFont,
                        commonStyles.boldFont
                      ]}
                    >
                      {data.application}
                    </Text>
                  </View>
                  <View
                    style={[
                      commonStyles.flexDisplay,
                      { justifyContent: "flex-end" }
                    ]}
                  >
                    <Text
                      style={[
                        commonStyles.blackFontColor,
                        commonStyles.xSmallFont
                      ]}
                    >
                      {data.applicationDetails}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[commonStyles.flexDirectionRow]}>
                <View
                  style={[commonStyles.flexDisplay, { paddingVertical: 10 }]}
                >
                  <Image source={bug} style={[styles.imgBag]} />
                </View>
                <View style={[styles.informationTxtContainer]}>
                  <View style={[commonStyles.flexDisplay]}>
                    <Text
                      style={[
                        commonStyles.primaryFontColor,
                        commonStyles.mediumFont,
                        commonStyles.boldFont
                      ]}
                    >
                      {data.pest}
                    </Text>
                  </View>
                  <TouchableWithoutFeedback
                    onPress={() => this.setState({ isVisible: true })}
                  >
                    <View
                      style={[
                        commonStyles.flexDisplay,

                        { justifyContent: "flex-end" }
                      ]}
                    >
                      <HTMLView value={data.pestDetails} stylesheet={styles} />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={[
                  commonStyles.primaryBackgroundColor,
                  styles.backDashboardBtn
                ]}
                onPress={() => this.clearSurveyResults()}
              >
                <Text
                  style={[
                    commonStyles.boldFont,
                    commonStyles.secondaryFontColor,
                    commonStyles.mediumFont
                  ]}
                >
                  Back to Dashboard
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Modal isVisible={this.state.isVisible}>
          <View
            style={[
              commonStyles.secondaryBackgroundColor,
              styles.modalContainer
            ]}
          >
            {this.renderModalView()}
            <TouchableOpacity
              onPress={() => this.setState({ isVisible: false })}
            >
              <View
                style={[
                  styles.okBtnContainer,
                  commonStyles.primaryBackgroundColor
                ]}
              >
                <Text
                  style={[
                    commonStyles.secondaryFontColor,
                    commonStyles.boldFont,
                    commonStyles.smallFont
                  ]}
                >
                  OK
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  survey: state.survey
});
const mapDispatchToProps = {
  clearSurveyResult,
  getSurveyData
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyResult);
