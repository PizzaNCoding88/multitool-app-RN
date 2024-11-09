import { View, Text, Pressable, TextInput, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Keyboard, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles/todo";
import Task from "../components/Task";
import DeletedTask from "../components/DeletedTask";

export default function Todo() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);

  // AsyncStorage keys
  const TASK_LIST_KEY = "taskList";
  const DELETED_LIST_KEY = "deletedList";

  // Save array data to AsyncStorage
  const saveArrayToStorage = async (key, array) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(array));
      console.log(`${key} saved to AsyncStorage`);
    } catch (error) {
      console.error(`Error saving ${key} to AsyncStorage:`, error);
    }
  };

  // Load array data from AsyncStorage
  const loadArrayFromStorage = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
      console.error(`Error loading ${key} from AsyncStorage:`, error);
      return [];
    }
  };

  // Load tasks from AsyncStorage when the component mounts
  useEffect(() => {
    const loadTasks = async () => {
      const storedTaskList = await loadArrayFromStorage(TASK_LIST_KEY);
      const storedDeletedList = await loadArrayFromStorage(DELETED_LIST_KEY);
      setTaskList(storedTaskList);
      setDeletedList(storedDeletedList);
    };
    loadTasks();
  }, []);

  // Add a new task
  function addTask() {
    if (!task) return; // Prevent empty tasks
    Keyboard.dismiss();
    const updatedTaskList = [...taskList, task];
    setTaskList(updatedTaskList);
    saveArrayToStorage(TASK_LIST_KEY, updatedTaskList);
    setTask(null);
  }

  // Complete a task and move it to deleted list
  function completeTask(i) {
    const updatedTaskList = [...taskList];
    const deletedTask = updatedTaskList.splice(i, 1)[0];
    const updatedDeletedList = [...deletedList, deletedTask];
    setTaskList(updatedTaskList);
    setDeletedList(updatedDeletedList);
    saveArrayToStorage(TASK_LIST_KEY, updatedTaskList);
    saveArrayToStorage(DELETED_LIST_KEY, updatedDeletedList);
  }

  // Delete a task from the deleted list
  function deleteTask(i) {
    const updatedDeletedList = [...deletedList];
    updatedDeletedList.splice(i, 1);
    setDeletedList(updatedDeletedList);
    saveArrayToStorage(DELETED_LIST_KEY, updatedDeletedList);
  }

  // Restore a task from the deleted list to the active task list
  function restoreTask(i) {
    const restoredTask = deletedList.splice(i, 1)[0];
    const updatedTaskList = [...taskList, restoredTask];
    const updatedDeletedList = [...deletedList];
    setTaskList(updatedTaskList);
    setDeletedList(updatedDeletedList);
    saveArrayToStorage(TASK_LIST_KEY, updatedTaskList);
    saveArrayToStorage(DELETED_LIST_KEY, updatedDeletedList);
  }

  // Alert for restore/delete options on deleted tasks
  function createAlert(index) {
    Alert.alert("Would you like to restore or delete the task forever?", "", [
      {
        text: "Restore",
        onPress: () => restoreTask(index),
      },
      {
        text: "Delete",
        onPress: () => deleteTask(index),
      },
    ]);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Active Tasks</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.tasksContainer}>
          <View style={styles.tasksList}>
            {taskList.map((task, i) => (
              <TouchableOpacity key={i} onPress={() => completeTask(i)}>
                <Task task={task} complete={completeTask} />
              </TouchableOpacity>
            ))}
          </View>

          {deletedList.length > 0 && (
            <View style={styles.tasksList}>
              <Text style={styles.title}>Deleted Tasks</Text>
              {deletedList.map((deleted, i) => (
                <TouchableOpacity key={i} onPress={() => createAlert(i)}>
                  <DeletedTask task={deleted} deleted={createAlert} />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.taskInput}>
          <TextInput
            placeholder="New Task..."
            style={styles.input}
            onChangeText={(text) => setTask(text)}
            value={task}
          />
          <Pressable style={styles.button} onPress={addTask}>
            <Text style={styles.addTaskBtn}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
