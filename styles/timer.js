import { StyleSheet, StatusBar } from "react-native";
import { vars } from "./variables.js";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: vars.colors.backgroundColor,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 20,
  },
});
