import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import commonStyles from "./../../assets/constants/commonStyles";
export default class Header extends Component {
  render() {
    return (
      <View
        style={[
          styles.headerContainer,
          commonStyles.primaryBackgroundColor,
          {
            height:
              this.props.headerHeight && this.props.headerHeight === "small"
                ? 60
                : 150
          }
        ]}
      >
        <Text style={[styles.headerTitle, commonStyles.secondaryFontColor]}>
          {this.props.headerTitle}
        </Text>
        {this.props.showBackBtn ? (
          <View style={[styles.backBtnContainer]}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text
                style={[commonStyles.secondaryFontColor, styles.backBtnTxt]}
              >
                {`<  Back`}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}
