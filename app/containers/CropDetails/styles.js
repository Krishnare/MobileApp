import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cropSubHead: {
    color: "#0a1e65",
    fontSize: 25,
    fontWeight: "500"
  },
  rice: {
    color: "#0a1e65",
    fontSize: 20
  },
  viewItem: {
    paddingHorizontal: 20,
    color: "#0a1e65"
  },
  underline: {
    borderWidth: 1,
    borderColor: "grey"
  },
  pickerItem: {
    color: "#0a1e65",
    fontSize: 15,
    fontWeight: "800"
  },
  itemLabel: {
    marginTop: 10,
    fontSize: 15,
    color: "#868686"
  },
  datePicker: {
    width: Dimensions.get("window").width - 100
  },
  btnCommon: {
    borderWidth: 2,
    width: Dimensions.get("window").width - 288,
    height: 40,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 20,
    borderColor: "#9b9b9b"
  },
  longBtn: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 0,
    borderRightWidth: 0
  },
  shortBtn: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 25,
    borderLeftWidth: 0
  },
  takeLeafBtn: {
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
  activeIndex: {
    backgroundColor: "#0a1e65",
    color: "#fff"
  }
});
export default styles;
