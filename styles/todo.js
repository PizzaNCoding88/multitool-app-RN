// import { StatusBar, StyleSheet } from "react-native";

// export default styles = StyleSheet.create({
//   addTaskBtn: {
//     color: "black",
//     fontWeight: "600",
//   },
//   button: {
//     width: 40,
//     height: 40,
//     backgroundColor: "white",
//     borderRadius: 150,
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "gray",
//   },
//   container: {
//     backgroundColor: "#293742",
//     flex: 1,
//     justifyContent: "space-between",
//     paddingBottom: 10,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 20,
//   },
//   icon: {
//     color: "white",
//   },
//   input: {
//     backgroundColor: "white",
//     height: 40,
//     flex: 1,
//     borderRadius: 50,
//     paddingHorizontal: 15,
//   },
//   mainContainer: {
//     flex: 1,
//     backgroundColor: "#293742",
//     paddingTop: StatusBar.currentHeight + 20,
//     paddingHorizontal: 10,
//   },
//   tasksContainer: {
//     flex: 1,
//     justifyContent: "space-between",
//     paddingVertical: 30,
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   taskInput: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginHorizontal: 10,
//     gap: 20,
//   },
//   tasksList: {
//     gap: 8,
//     width: "80%",
//   },
//   title: {
//     color: "white",
//     fontSize: 28,
//     fontWeight: "800",
//     textAlign: "center",
//     fontFamily: "monospace",
//   },
// });

//LIGHT MODE
// import { StyleSheet } from "react-native";

// export default StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: "#F5F5F5", // Light grey background for Material Design
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   header: {
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#1E88E5", // Material Blue
//     marginBottom: 10,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "space-between",
//   },
//   tasksContainer: {
//     flex: 1,
//   },
//   tasksList: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 8,
//     padding: 10,
//     marginVertical: 8,
//     // Shadow for Material Design effect
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   taskInput: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 15,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 8,
//     // Shadow for Material Design effect
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 2,
//     paddingHorizontal: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     backgroundColor: "#E3F2FD", // Light Blue background
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginRight: 10,
//     color: "#424242", // Dark grey text
//   },
//   button: {
//     backgroundColor: "#1E88E5", // Material Blue
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   addTaskBtn: {
//     fontSize: 24,
//     color: "#FFFFFF",
//     fontWeight: "bold",
//   },
// });

//DARK MODE
import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#121212", // Dark background for dark mode

    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#03DAC5", // Accent color for header text
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  tasksContainer: {
    flex: 1,
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
    backgroundColor: "#4C4646", // Darker grey input field
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    color: "#03DAC5", // Light grey text for readability
    fontSize: 16,
  },
  button: {
    backgroundColor: "#03DAC5", // Teal accent color
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  addTaskBtn: {
    fontSize: 24,
    color: "#000000", // High contrast with teal button background
    fontWeight: "bold",
  },
  taskText: {
    fontSize: 18,
    color: "#E0E0E0", // Light grey text for tasks
  },
  deletedTaskText: {
    fontSize: 18,
    color: "#CF6679", // Light red for deleted tasks to indicate removal
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#BB86FC", // Use accent color for deleted task section title
    marginBottom: 10,
  },
});
