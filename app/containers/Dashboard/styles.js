import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cropHead: {
    fontSize: 20,
    backgroundColor: "#0a1e65",
    color: "#ffffff",
    height: 120,
    textAlign: "center",
    paddingTop: 80,
    fontWeight: "500"
  },
  cropSubHead: {
    color: "#0a1e65",
    fontSize: 25,
    fontWeight: "500"
  },
  viewItem: {
    paddingHorizontal: 15
  },
  longBtn: {
    borderRadius: 20,
    paddingVertical: 5
  },
  btnCommon: {
    width: Dimensions.get("window").width - 250,
    height: Dimensions.get("window").height - 900,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#c2cc23"
  },
  detailsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: Dimensions.get("window").height - 800,
    alignContent: "center",
    backgroundColor: "#fff",
    textAlignVertical: "center",
    textAlign: "center",
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 3,
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowRadius: 10,
    marginLeft: 5,
    marginRight: 5
  },
  dateField: { color: "#4a4a4a", fontSize: 20, fontWeight: "600" },
  startSurvey: {
    borderRadius: 25,
    borderWidth: 2,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#0a1e65",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 25,
    borderColor: "#0a1e65",
    color: "#fff"
  },
  startSurveyHead: {
    paddingVertical: 30,
    justifyContent: "flex-end",
    flex: 1,
    bottom: 0,
    width: Dimensions.get("window").width,
    position: "absolute"
  }
});

export default styles;
