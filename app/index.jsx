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
        <Apps name={"Notes"} icon={"sticky-note"}></Apps>
        <View style={styles.bottomRow}></View>
      </View>
    </View>
  );
}
