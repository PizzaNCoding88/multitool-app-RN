import { StyleSheet } from "react-native";
import { vars } from "../variables";

export default styles = StyleSheet.create({
  task: {
    backgroundColor: vars.colors.teal,
    borderColor: vars.colors.borderColor,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 15,
    flexDirection: "row",
  },
  taskText: {
    fontSize: 15,
    textAlignVertical: "center",
    fontWeight: "bold",
    textDecorationLine: "line-through",
    fontFamily: "monospace",
  },
});
