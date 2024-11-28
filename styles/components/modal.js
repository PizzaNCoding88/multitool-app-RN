import { StyleSheet } from "react-native";
import { vars } from "../variables";

export default styles = StyleSheet.create({
  button: {
    color: vars.colors.teal,
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    justifyContent: "center",
    gap: 35,
    zIndex: 2,
    backgroundColor: vars.colors.backgroundColor,
    width: "80%",
    height: "40%",
    padding: 15,
  },
  selectorContainer: {
    gap: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  minutesSelectorContainer: {
    gap: 8,
    alignItems: "center",
  },
  labelText: {
    color: vars.colors.teal,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#383535",
  },
  timeInput: {
    borderColor: vars.colors.teal,
    borderWidth: 2,
    width: 80,
    height: 80,
    borderRadius: 8,
    color: vars.colors.teal,
    fontSize: 45,
    textAlign: "center",
  },
  title: {
    color: "#fff",
    paddingLeft: 20,
    fontSize: 30,
    fontFamily: vars.fonts.main,
  },
});
