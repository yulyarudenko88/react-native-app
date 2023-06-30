import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import BgImage from "../assets/images/bgImage.jpg";

const LoginScreen = () => {
  const [activeInput, setActiveInput] = useState("");

  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
  };

  const handleInputBlur = () => {
    setActiveInput("");
  };

  return (
    <ImageBackground source={BgImage} style={styles.image} resizeMode="cover">
      <View style={styles.form}>
        <Text style={styles.formTitle}>Увійти</Text>
        <View style={{ marginBottom: 16 }}>
          <TextInput
            style={[
              styles.formInput,
              activeInput === "email" && styles.activeFormInput,
            ]}
            onFocus={() => handleInputFocus("email")}
            onBlur={handleInputBlur}
            placeholder="Адреса електронної пошти"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.formInput,
              activeInput === "password" && styles.activeFormInput,
            ]}
            onFocus={() => handleInputFocus("password")}
            onBlur={handleInputBlur}
            placeholder="Пароль"
            secureTextEntry={true}
          />
          <Text style={styles.hiddenText}>Показати</Text>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <Text style={styles.breadcrumbs}>Немає акаунту? Зареєструватися</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    position: "relative",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 144,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  formTitle: {
    textAlign: "center",
    marginBottom: 33,

    color: "#212121",
    // fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.3,
  },

  inputWrapper: {
    position: "relative",
    marginBottom: 43,
  },

  formInput: {
    height: 50,
    paddingHorizontal: 16,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

    color: "#212121",
    // fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    // fontWeight: 400,
  },

  activeFormInput: { color: "#FF6C00" },

  hiddenText: {
    position: "absolute",
    right: 16,
    top: 16,

    color: "#1B4371",
    // fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: 400,
  },

  button: {
    marginBottom: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  buttonText: {
    textAlign: "center",
    color: "#FFF",
    // fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: 400,
  },

  breadcrumbs: {
    textAlign: "center",
    color: "#1B4371",
    // fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: 400,
  },
});

export default LoginScreen;
