import { View, StyleSheet, Text } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{ title: "Oops! Not Found", headerShown: false }}
      />

      <View style={styles.container}>
        <Text style={styles.text}>Screen not Found</Text>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#293742",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  text: {
    fontSize: 30,
    color: "#fff",
  },
});
