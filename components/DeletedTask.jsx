import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/components/deletedTask";

import BouncyCheckbox from "react-native-bouncy-checkbox";

const DeletedTasks = (props) => {
  const { task, deleted } = props;
  return (
    <>
      <View>
        <View style={styles.header}>
          {/* <View>
            <Link href="/"></Link>
          </View> */}

          <View style={styles.task}>
            <BouncyCheckbox
              onPress={() => {
                deleted();
              }}
              isChecked={true}
            />
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DeletedTasks;
