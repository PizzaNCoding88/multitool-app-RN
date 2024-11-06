import { View, Text } from "react-native";
import { Link } from "expo-router";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import styles from "../styles/components/apps";

export default function Apps(props) {
  const { name, icon, path } = props;
  return (
    <Link href={`${path}`}>
      <View style={styles.app}>
        <View style={styles.icon}>
          <FontAwesome6 name={icon} size={35} color="black" />
        </View>
        <Text style={styles.appName}>{name}</Text>
      </View>
    </Link>
  );
}
