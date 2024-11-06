import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styles from "../styles/components/task";

// import { useState } from "react";

const Task = (props) => {
  //   const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { task } = props;
  return (
    <View>
      <Text style={styles.task}>{task}</Text>
    </View>
  );
};

export default Task;
