import React, { useState, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import BgImage from "../assets/images/bgImage.jpg";

const initialFormData = { login: "", email: "", password: "" };

const formReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, login: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const RegistrationScreen = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormData);
  const [activeInput, setActiveInput] = useState("");
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const submitFormData = () => {
    console.log(state);
    resetForm();
    Keyboard.dismiss();
  };

  const resetForm = () => {
    dispatch({ type: "login", payload: "" });
    dispatch({ type: "email", payload: "" });
    dispatch({ type: "password", payload: "" });
  };

  const handleInputFocus = (inputName) => {
    setActiveInput(inputName);
    setIsKeyboardShow(true);
  };

  const handleInputBlur = () => {
    setActiveInput("");
    setIsKeyboardShow(false);
  };

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <ImageBackground source={BgImage} style={styles.image} resizeMode="cover">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{ ...styles.form, paddingBottom: isKeyboardShow ? 0 : 78 }}
        >
          <View style={styles.avatar}>
            <TouchableOpacity style={styles.addAvatarBtn}>
              <AntDesign name="plus" size={18} color="#FF6C00" />
            </TouchableOpacity>
          </View>
          <Text style={styles.formTitle}>Реєстрація</Text>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={[
                styles.formInput,
                activeInput === "login" && styles.activeFormInput,
              ]}
              value={state.login}
              onChangeText={(value) =>
                dispatch({ type: "login", payload: value })
              }
              onFocus={() => handleInputFocus("login")}
              onBlur={handleInputBlur}
              placeholder="Логін"
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={[
                styles.formInput,
                activeInput === "email" && styles.activeFormInput,
              ]}
              value={state.email}
              onChangeText={(value) =>
                dispatch({ type: "email", payload: value })
              }
              onFocus={() => handleInputFocus("email")}
              onBlur={handleInputBlur}
              placeholder="Адреса електронної пошти"
            />
          </View>
          <View
            style={{
              ...styles.inputWrapper,
              marginBottom: isKeyboardShow ? 32 : 43,
            }}
          >
            <TextInput
              style={[
                styles.formInput,
                activeInput === "password" && styles.activeFormInput,
              ]}
              value={state.password}
              onChangeText={(value) =>
                dispatch({ type: "password", payload: value })
              }
              onFocus={() => handleInputFocus("password")}
              onBlur={handleInputBlur}
              placeholder="Пароль"
              secureTextEntry={isPasswordVisible}
            />
            <TouchableOpacity
              style={styles.hiddenTextBtn}
              activeOpacity={0.8}
              onPress={togglePasswordVisibility}
            >
              <Text style={styles.hiddenText}>
                {isPasswordVisible ? "Показати" : "Приховати"}
              </Text>
            </TouchableOpacity>
          </View>
          {!isKeyboardShow && (
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={submitFormData}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Зареєстуватися</Text>
              </TouchableOpacity>
              <Text style={styles.breadcrumbs}>Вже є акаунт? Увійти</Text>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
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
    paddingTop: 92,
    paddingBottom: 78,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  avatar: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  addAvatarBtn: {
    position: "absolute",
    top: 81,
    right: 0,
    transform: [{ translateX: 12.5 }],
    width: 25,
    height: 25,
    backgroundColor: "#FFF",

    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  formTitle: {
    textAlign: "center",
    marginBottom: 33,

    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
  },

  inputWrapper: {
    position: "relative",
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
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },

  activeFormInput: { borderColor: "#FF6C00" },

  hiddenTextBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },

  hiddenText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
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
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },

  breadcrumbs: {
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});

export default RegistrationScreen;
