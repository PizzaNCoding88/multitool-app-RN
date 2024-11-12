import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#121212",

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
    color: "#03DAC5",
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    gap: 20,
  },
  taskInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#1F1B24",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#968f8f",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    color: "#03DAC5",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#03DAC5",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  addTaskBtn: {
    fontSize: 24,
    color: "#000000",
    fontWeight: "bold",
  },
  taskText: {
    fontSize: 18,
    color: "#E0E0E0",
  },
  deletedTaskText: {
    fontSize: 18,
    color: "#CF6679",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#BB86FC",
    marginBottom: 10,
  },
  deleteTaskRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
