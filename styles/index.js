import { StyleSheet } from "react-native";
import { vars } from "../styles/variables";

export default styles = StyleSheet.create({
  appContainer: {
    gap: 50,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    backgroundColor: vars.colors.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
