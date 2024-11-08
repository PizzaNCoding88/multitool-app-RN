import React from "react";
import { Text, StyleSheet, View } from "react-native";
import styles from "../styles/components/task";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = (props) => {
  const { task, complete } = props;
  return (
    <>
      <View style={styles.task}>
        <BouncyCheckbox
          onPress={() => {
            complete();
          }}
          fillColor="green"
          iconStyle={{ borderWidth: 3 }}
        />
        <Text style={styles.taskText}>{task}</Text>
      </View>
    </>
  );
};

export default Task;
