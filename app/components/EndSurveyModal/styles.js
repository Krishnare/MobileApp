import { StyleSheet } from "react-native";
export default (styles = StyleSheet.create({
  modalContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    display: "flex"
  },
  exclamationImg: {
    height: 55,
    width: 55
  },
  endSurveyTxt: {
    fontSize: 22,
    marginTop: 10
  },
  endSurveyMessage: {
    fontSize: 17,
    fontFamily: "OpenSans-Regular",
    color: "#000000",
    textAlign: "center"
  },
  button: {
    width: 200,
    height: 45,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  btnTxtCS: {
    fontSize: 20
  },
  borderBtn: {
    borderWidth: 1.5,
    borderColor: "#0a1e65"
  },
  buttonContainer: {
    marginTop: 20
  }
}));
