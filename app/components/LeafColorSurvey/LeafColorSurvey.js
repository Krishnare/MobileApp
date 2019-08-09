import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "./../../components/Header/Header";

import commonStyles from "./../../assets/constants/commonStyles";
import leaf from "./../../assets/images/leaf.png";
import styles from "./styles";

export class LeafColorSurvey extends Component {
    render(){
        return (
            <View style={commonStyles.flexDisplay}> 
                <Header headerTitle={"Leaf Color Chart"} headerHeight={"small"} />
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
              Survey 1 of 10 Captured
            </Text>
          </View>
          <View style={[styles.successfulMessageContainer]}>
            <Text
              style={[styles.successfulMessageTxt, commonStyles.fontFamily]}
            >
             
             "Continue taking leaf samples.
            </Text>
          </View>
          <View style={[styles.buttonContainer]}>
            {/* {this.props.payload.surveyCount === surveyCount ? (
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
            ) : ( */}
              <View>
                <TouchableOpacity
                  style={[commonStyles.primaryBackgroundColor, styles.button]}
                  //onPress={() => this.props.payload.storeExifData()}
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
                //onPress={() => this.props.payload.retakeImage()}
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
            {/* {this.props.payload.surveyCount !== surveyCount ? ( */}
              <View>
                <TouchableOpacity
                  style={[styles.endSurveyContainer]}
                //   onPress={() => this._toggleModal(true)}
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
            {/* ) : null} */}
          </View>
          <View style={[styles.leafData]}>
            <Text
              style={[
                commonStyles.primaryFontColor,
                commonStyles.xxSmallFont,
                commonStyles.boldFont
              ]}
            >
              {/* {`without leaf : ${
                this.props.payload.leafDetails.withoutLeaf.toFixed(2)
              }, with leaf(${
                this.props.payload.surveyCount
              }/${surveyCount}) : ${this.props.payload.leafDetails.withLeaf.toFixed(2)}`} */}
            </Text>
          </View>
        </View>
            </View>
        )
    }
}

export default LeafColorSurvey;