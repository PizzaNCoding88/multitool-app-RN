// import { Stack } from "expo-router";
// import { useEffect } from "react";

// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [loaded, error] = useFonts({
//     "Roboto-mono": require("../assets/fonts/RobotoMonoRegular.ttf"),
//   });

//   useEffect(() => {
//     if (loaded || error) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded, error]);

//   if (!loaded && !error) {
//     return null;
//   }

//   return (
//     <Stack>
//       <Stack.Screen
//         name="index"
//         options={{ title: "Home", headerShown: false }}
//       />
//       <Stack.Screen
//         name="todo"
//         options={{ title: "To-Do", headerShown: false }}
//       />
//     </Stack>
//   );
// }

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="todo"
        options={{ title: "To-Do", headerShown: false }}
      />
    </Stack>
  );
}
