import { StyleSheet, Dimensions } from "react-native";
export default (commonStyles = StyleSheet.create({
  flexDisplay: {
    display: "flex",
    flex: 1
  },
  flexDisplayCenter: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  primaryBackgroundColor: {
    backgroundColor: "#0a1e65"
  },
  secondaryBackgroundColor: {
    backgroundColor: "#ffffff"
  },
  primaryFontColor: {
    color: "#0a1e65",
    fontFamily: "OpenSans-SemiBold"
  },
  secondaryFontColor: {
    color: "#ffffff",
    fontFamily: "OpenSans-SemiBold"
  },
  blackFontColor: {
    color: "#000000"
  },
  fontFamily: {
    fontFamily: "OpenSans-Regular"
  },
  boldFont: {
    fontWeight: "bold"
  },
  flexDirectionRow: {
    flexDirection: "row"
  },
  textAlignCenter: {
    textAlign: "center"
  },
  xxSmallFont: {
    fontSize: 14,
    fontFamily: "OpenSans-Regular"
  },
  xSmallFont: {
    fontSize: 16,
    fontFamily: "OpenSans-Regular"
  },
  smallFont: {
    fontSize: 18,
    fontFamily: "OpenSans-Regular"
  },
  mediumFont: {
    fontSize: 20,
    fontFamily: "OpenSans-Regular"
  },
  largeFont: {
    fontSize: 22,
    fontFamily: "OpenSans-Regular"
  },
  xLargeFont: {
    fontSize: 24,
    fontFamily: "OpenSans-Regular"
  }
}));
