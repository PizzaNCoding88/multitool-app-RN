// import { useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles/components/task";

const Task = (props) => {
  //   const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { task } = props;
  return (
    <View>
      <Text style={styles.task}>{task}</Text>;
    </View>
  );
};

export default Task;
