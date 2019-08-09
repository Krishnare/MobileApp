import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export default (styles = StyleSheet.create({
  activityIndicator: {
    position: "absolute",
    flex: 1,
    display: "flex",
    backgroundColor: "rgba(1,1,1,0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
    height: height,
    width: width
  },
  speedometer: {
    height: 120,
    resizeMode: "contain"
  },
  headerTxt: {
    fontSize: 30
  },
  headerTxtContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  marginBottom: {
    marginBottom: 20
  },
  informationContainer: {
    padding: 20,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: "#ffffff",
    width: Dimensions.get("window").width - 30
  },
  imgBag: {
    height: 55,
    width: 55,
    resizeMode: "contain"
  },
  informationTxtContainer: {
    display: "flex",
    flex: 4
  },
  backDashboardBtn: {
    width: Dimensions.get("window").width - 30,
    height: 50,
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  p: {
    fontSize: 16,
    fontFamily: "OpenSans-Regular",
    color: "#000000"
  },
  b: {
    color: "#0a1e65",
    fontWeight: "bold"
  },
  modalContainer: {
    padding: 20,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    display: "flex"
  },
  list: {
    paddingLeft: 20
  },
  okBtnContainer: {
    height: 30,
    width: 70,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end"
  }
}));
