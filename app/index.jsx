import { View } from "react-native";

import styles from "../styles/index";
import Apps from "../components/Apps";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.appContainer}>
        <View style={styles.topRow}>
          <Apps name={"To-do List"} icon={"list"} path={"/todo"}></Apps>
          <Apps name={"Unit Converter"} icon={"calculator"}></Apps>
        </View>
        <View style={styles.bottomRow}>
          <Apps name={"Notes"} icon={"sticky-note"}></Apps>
          <Apps name={"Timer"} icon={"stopwatch"} path={"/timer"}></Apps>
        </View>
      </View>
    </View>
  );
}
