import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "RobotoRegular": require("./assets/fonts/Roboto-Regular.ttf"),
    "RobotoMedium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <LoginScreen />
      {/* <RegistrationScreen/> */}
    </>
  );
}

const styles = StyleSheet.create({});
