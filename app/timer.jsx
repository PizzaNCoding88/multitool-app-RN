import { View, Text } from "react-native";
import styles from "../styles/timer";

import CountdownComponent from "../components/CountdownComponent";

export default function Timer() {
  return (
    <View style={styles.mainContainer}>
      <Text>
        <CountdownComponent />
      </Text>
    </View>
  );
}
