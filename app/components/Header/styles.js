import { StyleSheet, Dimensions } from "react-native";
export default (styles = StyleSheet.create({
  headerContainer: {
    height: 150,
    width: Dimensions.get("window").width,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10
  },
  headerTitle: {
    fontWeight: "500",
    fontSize: 20
  },
  backBtnTxt: {
    fontSize: 18
  },
  backBtnContainer: {
    position: "absolute",
    bottom: 10,
    left: 20
  }
}));
