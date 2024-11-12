import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  task: {
    backgroundColor: "#03DAC5",
    borderColor: "#c2baba",
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
