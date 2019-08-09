import { StyleSheet } from "react-native";
export default (styles = StyleSheet.create({
    topImgcontainer: {
        height: 150,
        width: 150,
        resizeMode: "contain"
      },
      successfulHeaderContainer: {
        paddingVertical: 20,
        marginTop: 20
      },
      successfulHeaderTxt: {
        fontSize: 25
      },
      successfulMessageContainer: {
        paddingHorizontal: 30
      },
      successfulMessageTxt: {
        color: "#000000",
        textAlign: "center",
        fontSize: 17,
        paddingHorizontal: 25
      },
      button: {
        width: 250,
        height: 50,
        borderRadius: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
      },
      buttonContainer: {
        marginTop: 20
      },
      btnTxtCS: {
        fontSize: 20
      },
      borderBtn: {
        borderWidth: 1.5,
        borderColor: "#0a1e65"
      },
      viewBorderRight: {
        borderRightColor: "#c2cc23",
        borderStyle: "dotted",
        borderRightWidth: 3
      },
      endSurveyTxt: {
        fontSize: 18
      },
      endSurveyContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 5
      },
      leafData: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 10
      }
}))