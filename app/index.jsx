import { View } from "react-native";

import styles from "../styles/index";
import Apps from "../components/Apps";

// import { useFonts } from "expo-font";

export default function Index() {
  // const [fontsLoaded] = useFonts({
  //   RobotoMonoBold: require("../assets/fonts/RobotoMonoBold.ttf"),
  //   RobotoMonoMedium: require("../assets/fonts/RobotoMonoMedium.ttf"),
  //   RobotoMonoRegular: require("../assets/fonts/RobotoMonoRegular.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

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
