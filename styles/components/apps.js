import { StyleSheet } from "react-native";
import { vars } from "../variables";

export default styles = StyleSheet.create({
  app: {
    borderRadius: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    width: 150,
  },
  appName: {
    color: vars.colors.teal,
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "monospace",
    textAlign: "center",
  },
  icon: {
    backgroundColor: vars.colors.teal,
    width: 75,
    height: 75,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
