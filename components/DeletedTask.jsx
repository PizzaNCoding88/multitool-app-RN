import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/components/deletedTask";

// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";

const DeletedTasks = (props) => {
  const { task } = props;
  return (
    <>
      <View>
        <View style={styles.header}>
          <View>
            <Link href="/">
              {/* <FontAwesomeIcon
                icon={faHouse}
                size={25}
                style={{ color: "white" }}
              /> */}
            </Link>
          </View>

          <View>
            <Text style={styles.task}>{task}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DeletedTasks;
