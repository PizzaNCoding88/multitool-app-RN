import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styles from "../styles/components/task";
import BouncyCheckbox from "react-native-bouncy-checkbox";

// import { useState } from "react";

const Task = (props) => {
  const { task } = props;
  return (
    <>
      <View style={styles.task}>
        <BouncyCheckbox onPress={(isChecked) => {}} />
        <Text style={styles.taskText}>{task}</Text>
      </View>
    </>
  );
};

export default Task;
