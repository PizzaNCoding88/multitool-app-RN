//modal styling

import { View, TextInput, Pressable, Text } from "react-native";
import React, { useState } from "react";

const Modal = ({ showModal, handleData, showCountdown }) => {
  const [mins, setMins] = useState("");
  const [secs, setSecs] = useState("");

  const submit = () => {
    showModal(false);
    showCountdown(true);
    handleData(mins, secs);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ color: "white" }}>Modal</Text>
      <View style={{ gap: 20 }}>
        <TextInput
          keyboardType="numeric"
          style={{ backgroundColor: "white", width: 300, height: 35 }}
          placeholder="Mins"
          value={mins}
          onChangeText={(mins) => setMins(mins)}
        />
        <TextInput
          keyboardType="numeric"
          style={{ backgroundColor: "white", width: 300, height: 35 }}
          placeholder="Secs"
          value={secs}
          onChangeText={(seconds) => setSecs(seconds)}
        />
        <Pressable
          style={{
            borderColor: "#03DAC5",
            borderWidth: 2,
            width: 60,
            alignItems: "center",
          }}
          onPress={submit}
        >
          <Text style={{ color: "white" }}>Set</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Modal;
