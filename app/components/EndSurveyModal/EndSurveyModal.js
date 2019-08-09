import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import commonStyles from "./../../assets/constants/commonStyles";
import exclamation from "./../../assets/images/exclamation.png";
import Modal from "react-native-modal";
import styles from "./styles";

export default class EndSurveyModal extends Component {
  render() {
    return (
      <Modal isVisible={this.props.isModalVisible}>
        <View
          style={[commonStyles.secondaryBackgroundColor, styles.modalContainer]}
        >
          <Image style={[styles.exclamationImg]} source={exclamation} />
          <View>
            <Text
              style={[
                commonStyles.primaryFontColor,
                styles.endSurveyTxt,
                commonStyles.boldFont
              ]}
            >
              End Survey
            </Text>
          </View>
          <View>
            <Text style={[styles.endSurveyMessage]}>
              Are you sure to end the survey now?
            </Text>
            <Text style={[styles.endSurveyMessage]}>
              All leaf sample data will be lost.
            </Text>
          </View>
          <View style={[styles.buttonContainer]}>
            <View>
              <TouchableOpacity
                style={[commonStyles.primaryBackgroundColor, styles.button]}
                onPress={() => {
                  this.props._toggleModal(false, true),
                    this.props.navigation.navigate("Dashboard");
                }}
              >
                <Text
                  style={[
                    commonStyles.secondaryFontColor,
                    commonStyles.boldFont,
                    styles.btnTxtCS
                  ]}
                >
                  End Survey
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
                onPress={() => this.props._toggleModal(false)}
              >
                <Text
                  style={[
                    commonStyles.primaryFontColor,
                    commonStyles.boldFont,
                    styles.btnTxtCS
                  ]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
