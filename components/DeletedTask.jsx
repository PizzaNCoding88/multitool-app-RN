import React from "react";
import { Text } from "react-native";
import styles from "../styles/components/deletedTask";

const DeletedTask = (props) => {
  const { task } = props;
  return <Text style={styles.task}>{task}</Text>;
};

export default DeletedTask;
