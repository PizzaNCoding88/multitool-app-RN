import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import styles from "../styles/index";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.appContainer}>
        <View style={styles.app}>
          <Link href="/about" style={{ color: "white" }}>
            About
          </Link>
        </View>
        <View style={styles.app}></View>
        <View style={styles.app}></View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#293742",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
