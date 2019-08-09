import { StyleSheet } from "react-native";
export default (styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  logo: {
    height: 60,
    width: 60
  },
  headerText: {
    fontSize: 60,
    fontWeight: "bold",
    marginTop: 20
  },
  messageContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  message: {
    fontSize: 24,
    textAlign: "center"
  },
  getStartedBtnTxt: {
    fontSize: 20,
    fontWeight: "400"
  },
  getStartBtn: {
    width: 200,
    height: 50,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  getStartBtnContainer: {
    paddingVertical: 40
  }
}));
