import { Text, Alert, Pressable, View } from "react-native";
import { useCountdown } from "rn-countdown-manager";
import { Countdown } from "rn-countdown-manager";

import {
  CustomBlocksType, // component custom assets
  ZERO_TO_FIFTY_NINE, // used on minutes and seconds
  ZERO_TO_NINETY_NINE, // used on hours
  UseCountdownProps, // timer hook props
  UseCountdownReturn, // timer hook return
} from "rn-countdown-manager";

export default function CountdownComponent({ mins, secs }) {
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
    onComplete: () => console.log("Finished!"),
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

  return (
    <>
      <View style={{ gap: 50 }}>
        <Countdown
          hours={hours} // hours on component (Max to 99)
          minutes={minutes} // seconds on component (Max to 59)
          seconds={seconds} // minutes on component (Max to 59)
          showHours={true} // if hours digits should be shown
          showMinutes={true} // if minutes digits should be shown
          color="#03DAC5" // cell color when on (defaults to #000000)
          // offColor="#03DAC5" // cell color when off (defaults to transparent)
          size="lg" // component size, can be "sm", "md" or "lg"
          // customBlocks={customBlockAssetsJson} // custom SVGs can be used in cells
          // CustomSeparator={() => <Text> - </Text>} // custom separator for HH:MM:SS, accepts any React.FC
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

        {/* <View style={{ alignItems: "center" }}>
          <Pressable
            onPress={() => reset()}
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
        </View> */}
      </View>
    </>
  );
}
