import { StyleSheet, StatusBar } from "react-native";
import { vars } from "./variables.js";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: vars.colors.backgroundColor,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: vars.colors.teal,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  tasksContainer: {
    flex: 1,
    gap: 40,
  },
  tasksList: {
    marginVertical: 8,
    gap: 20,
  },
  taskInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: vars.colors.taskInputBg,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: vars.colors.inputBg,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    color: vars.colors.teal,
    fontSize: 16,
  },
  button: {
    backgroundColor: vars.colors.teal,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  addTaskBtn: {
    fontSize: 24,
    color: vars.colors.black,
    fontWeight: "bold",
  },
  deleteTaskRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
