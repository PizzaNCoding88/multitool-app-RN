//modal styling

import { View, TextInput, Pressable, Text } from "react-native";
import React, { useState } from "react";

import styles from "../styles/components/modal";

const Modal = ({ showModal, handleData, showCountdown }) => {
  const [mins, setMins] = useState("");
  const [secs, setSecs] = useState("");

  const submit = () => {
    showModal(false);
    showCountdown(true);
    handleData(mins, secs);
  };

  return (
    <>
      <View style={styles.overlay}></View>
      <View style={styles.container}>
        <Text style={styles.title}>ENTER TIME</Text>
        <View style={styles.selectorContainer}>
          <View style={styles.minutesSelectorContainer}>
            <TextInput
              keyboardType="numeric"
              style={styles.timeInput}
              value={mins}
              onChangeText={(mins) => setMins(mins)}
            />
            <Text style={styles.labelText}>Minutes</Text>
          </View>
          <View style={styles.minutesSelectorContainer}>
            <TextInput
              keyboardType="numeric"
              style={styles.timeInput}
              value={secs}
              onChangeText={(seconds) => setSecs(seconds)}
            />
            <Text style={styles.labelText}>Seconds</Text>
          </View>
        </View>
        <Pressable onPress={submit}>
          <Text style={styles.button}>SET</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Modal;
