import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Header from "./../../components/Header/Header";

import commonStyles from "./../../assets/constants/commonStyles";
import styles from "./styles";

class SurveyType extends Component {
  state = {
    selectedVal: 0
  };
  toggleSurveyType = e => {
    this.setState({ selectedVal: e });
  };
  render() {
    const { selectedVal } = this.state;
    return (
      <View style={styles.container}>
        <Header headerTitle={"N-Tester"} headerHeight={"small"} />
        <View style={[commonStyles.flexDisplayCenter]}>
          <Text style={[commonStyles.largeFont, commonStyles.primaryFontColor]}>
            Select Survey Type
          </Text>
          <Text style={[commonStyles.xSmallFont, styles.subHead]}>
            Select Leaf Color Chart if you do not have the N-clip
          </Text>
        </View>
        <View style={[styles.imageContainer]}>
          <TouchableOpacity
            onPress={() => this.toggleSurveyType(1)}
            style={[
              styles.boxContainer,
              selectedVal === 1 ? styles.onChecked : null
            ]}
          >
            <View style={styles.middleContent}>
              {selectedVal === 1 ? (
                <View style={styles.topright}>
                  <Text style={styles.tick}>&#10003;</Text>
                </View>
              ) : null}
              <View>
                <Image
                  style={{ width: 100, height: 100, alignItems: "center" }}
                  source={{
                    uri:
                      "https://facebook.github.io/react-native/docs/assets/favicon.png"
                  }}
                />
              </View>

              <View>
                <Text
                  style={[
                    commonStyles.mediumFont,
                    commonStyles.primaryFontColor
                  ]}
                >
                  N-Clip
                </Text>
              </View>
              <View>
                <Text style={styles.subText}>
                  Test leaf Samples using an N-clip
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.toggleSurveyType(2)}
            style={[
              styles.boxContainer,
              selectedVal === 2 ? styles.onChecked : null
            ]}
          >
            <View style={styles.middleContent}>
              {selectedVal === 2 ? (
                <View style={styles.topright}>
                  <Text style={styles.tick}>&#10003;</Text>
                </View>
              ) : null}
              <View>
                <Image
                  style={{ width: 100, height: 100, alignItems: "center" }}
                  source={{
                    uri:
                      "https://facebook.github.io/react-native/docs/assets/favicon.png"
                  }}
                />
              </View>

              <View>
                <Text
                  style={[
                    commonStyles.mediumFont,
                    commonStyles.primaryFontColor
                  ]}
                >
                  Leaf Color Chart
                </Text>
              </View>
              <View>
                <Text style={styles.subText}>
                  Determine plant health via color chart
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View style={[styles.getStartBtnContainer]}>
            <TouchableOpacity
              disabled={selectedVal !== 0 ? false : true}
              onPress={() => this.props.navigation.navigate("SurveyType")}
              style={[
                styles.getStartBtn,
                selectedVal !== 0
                  ? commonStyles.primaryBackgroundColor
                  : styles.disabledBackground
              ]}
            >
              <Text
                style={[
                  styles.getStartedBtnTxt,
                  commonStyles.secondaryFontColor,
                  selectedVal === 0 ? styles.btnDisabledText : ""
                ]}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SurveyType;
