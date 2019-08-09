import { StyleSheet, Dimensions } from "react-native";
export default (styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
  },
  imageContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-around"
  },
  boxContainer: {
    flex: 1,
    height: 300,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ecedf2",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 2,
    position: "relative",
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 0.5
  },
  onChecked: {
    borderColor: "#2777b8",
    borderWidth: 2
  },
  middleContent: {
    alignItems: "center",
    justifyContent: "center"
  },
  subText: {
    textAlign: "center",
    width: Dimensions.get("window").width - 250,
    flexWrap: "wrap",
    marginVertical: 5,
    color: "#b0b0b0"
  },
  subHead: {
    textAlign: "center",
    width: Dimensions.get("window").width - 130,
    flexWrap: "wrap",
    color: "#b0b0b0"
  },
  disabledBackground: {
    backgroundColor: "#d8d8d8",
    borderRadius: 50
  },
  btnDisabledText: {
    color: "#ffffff"
  },

  topright: {
    position: "absolute",
    top: -76,
    right: -18,
    backgroundColor: "#2777b8",
    borderRadius: 50,
    width: 25,
    height: 25
  },
  tick: {
    fontSize: 20,
    color: "#fff",
    left: 6,
    top: -2,
    fontWeight: "800"
  }
}));
