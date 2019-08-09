import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import styles from "./styles";
export default class ListItem extends Component {
  render() {
    let data = this.props.data;
    return (
      <TouchableWithoutFeedback>
        {/*
          onPress={() =>
          this.props.navigation.navigate("SurveyResult", { surveyResult: data })
        }
        */}
        <View style={[styles.viewItem, styles.detailsBox]}>
          <View>
            <Text style={styles.dateField}>{data.date}</Text>
            <Text style={{ fontSize: 20 }}>{data.day}</Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text
              style={[
                styles.longBtn,
                styles.btnCommon,
                data.surveyData.cropHealth !== "Healthy"
                  ? { backgroundColor: "#eb3f3f" }
                  : ""
              ]}
            >
              {data.surveyData.cropHealth}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
