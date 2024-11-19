// import { View, Text } from "react-native";
// import { useState } from "react";

// import Modal from "../components/Modal";
// import styles from "../styles/timer";

// import CountdownComponent from "../components/CountdownComponent";

// export default function Timer() {
//   //1. create 2 state vars(one for input modal and one for countdown)
//   //2. when time is selected in the modal, activate the countdown

//   const [showModal, setShowModal] = useState(true);
//   const [showCountdown, setShowCountdown] = useState(false);
//   const [minutes, setMinutes] = useState("");
//   const [seconds, setSeconds] = useState("");

//   const handleData = (mins, secs) => {
//     setMinutes(mins);
//     setSeconds(secs);
//     console.log(minutes, seconds);
//   };

//   return (
//     <View style={styles.mainContainer}>
//       {showModal && (
//         <Modal
//           showModal={setShowModal}
//           handleData={handleData}
//           showCountdown={setShowCountdown}
//         />
//       )}
//       <Text>
//         {showCountdown && minutes ? (
//           <CountdownComponent mins={minutes} secs={seconds} />
//         ) : null}
//       </Text>
//     </View>
//   );
// }
import { View, Text } from "react-native";
import { useState, useEffect } from "react";

import Modal from "../components/Modal";
import styles from "../styles/timer";

import CountdownComponent from "../components/CountdownComponent";

export default function Timer() {
  const [showModal, setShowModal] = useState(true);
  const [showCountdown, setShowCountdown] = useState(false);
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const handleData = (mins, secs) => {
    setMinutes(mins);
    setSeconds(secs);
  };

  return (
    <View style={styles.mainContainer}>
      {showModal && (
        <Modal
          showModal={setShowModal}
          handleData={handleData}
          showCountdown={setShowCountdown}
        />
      )}
      <Text>
        {showCountdown && <CountdownComponent mins={minutes} secs={seconds} />}
      </Text>
    </View>
  );
}
