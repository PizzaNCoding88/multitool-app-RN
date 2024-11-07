<<<<<<< HEAD
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styles from "../styles/components/task";

// import { useState } from "react";
=======
// import { useState } from "react";
import { Text, View } from "react-native";
import styles from "../styles/components/task";
>>>>>>> b44eab43f8d30178ba0d1a2f999d514e8e2a7c0e

const Task = (props) => {
  //   const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const { task } = props;
  return (
    <View>
<<<<<<< HEAD
      <Text style={styles.task}>{task}</Text>
=======
      <Text style={styles.task}>{task}</Text>;
>>>>>>> b44eab43f8d30178ba0d1a2f999d514e8e2a7c0e
    </View>
  );
};

export default Task;
