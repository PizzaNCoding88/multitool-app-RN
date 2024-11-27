import { Text, Alert, Pressable, View } from "react-native";
import { useState, useEffect } from "react";
import { useCountdown } from "rn-countdown-manager";
import { Countdown } from "rn-countdown-manager";
import { Audio } from "expo-av";

export default function CountdownComponent({
  mins,
  secs,
  showModal,
  handleData,
  showCountdown,
}) {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../android/app/src/main/res/raw/audio.mp3")
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          playSound();
          Alert.prompt("complete");
        }
      : undefined;
  }, [sound]);

  const {
    isRunning,
    isPaused,
    isFinished,
    pause,
    resume,
    start,
    reset,
    formattedTime,
    hours,
    minutes,
    seconds,
  } = useCountdown({
    autoStart: false,
    hours: 0,
    minutes: mins,
    seconds: secs,
    onComplete: () => {
      console.log("Finished!");
      playSound();
    },
  });

  const startTimer = () => {
    if (isRunning) {
      pause();
    } else if (isPaused) {
      resume();
    } else {
      start();
    }
  };

  const submit = () => {
    showModal(true);
    handleData();
    showCountdown();
  };

  return (
    <>
      <View style={{ gap: 50 }}>
        <Countdown
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          showHours={false}
          showMinutes={true}
          color="#03DAC5"
          // offColor="#03DAC5" // cell color when off (defaults to transparent)
          size="lg"
          // customBlocks={customBlockAssetsJson} // custom SVGs can be used in cells
          // CustomSeparator={() => <Text> : : :</Text>} // custom separator for HH:MM:SS, accepts any React.FC
        />
        <View style={{ alignItems: "center" }}>
          <Pressable
            onPress={() => startTimer()}
            style={{
              borderColor: "white",
              borderWidth: 2,
              paddingVertical: 15,
              paddingHorizontal: 15,
              borderRadius: 20,
              borderColor: "#03DAC5",
            }}
          >
            <Text style={{ color: "#03DAC5", fontFamily: "monospace" }}>
              Start/Pause Timer
            </Text>
          </Pressable>
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            onPress={() => submit()}
            style={{
              borderColor: "white",
              borderWidth: 2,
              paddingVertical: 15,
              paddingHorizontal: 15,
              borderRadius: 20,
              borderColor: "#03DAC5",
            }}
          >
            <Text style={{ color: "#03DAC5", fontFamily: "monospace" }}>
              Reset Timer
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
