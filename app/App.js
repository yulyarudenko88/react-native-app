import React from "react";
import { StyleSheet, View,TouchableWithoutFeedback,Keyboard } from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen"

export default function App() {
  return (<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </View></TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
