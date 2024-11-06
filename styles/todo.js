import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  addTaskBtn: {
    color: "black",
    fontWeight: "600",
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
  },
  container: {
    backgroundColor: "#293742",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  icon: {
    color: "white",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    flex: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#293742",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  tasksContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 30,
    flexDirection: "column",
  },
  taskInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    gap: 20,
  },
  tasksList: { gap: 8 },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
  },
});
