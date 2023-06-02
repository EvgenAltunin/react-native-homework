import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [isKeybordShow, setIsKeybordShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [focusedInput, setFocusedInput] = useState(null)

  const navigation = useNavigation();

  const onKeybordHide = () => {
    setIsKeybordShow(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    console.log({ email, password });
    setIsKeybordShow(false);
    Keyboard.dismiss();
    setEmail("");
    setPassword("");
  };
  return (
    <TouchableWithoutFeedback onPress={onKeybordHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/background.jpg")}
        >
          <View
            style={{
              ...styles.formContainer,
              height: isKeybordShow ? 670 : 490,
            }}
          >
            <Text style={styles.title}>Log In</Text>
            <View style={styles.form}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor:
                      focusedInput === "email" ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholder="example@mail.com"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => {
                    setIsKeybordShow(true), setFocusedInput("email");
                  }}
                  onBlur={() => {
                    setFocusedInput(null);
                  }}
                ></TextInput>
                <View style={{ position: "relative" }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      position: "relative",
                      marginTop: 16,
                      paddingRight: 65,
                      borderColor:
                        focusedInput === "password" ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="••••••••••••"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={isPasswordHide}
                    onFocus={() => {
                      setIsKeybordShow(true), setFocusedInput("password");
                    }}
                    onBlur={() => {
                      setFocusedInput(null);
                    }}
                  ></TextInput>
                  <TouchableOpacity
                    style={styles.passwordToggleBtn}
                    onPress={() => setIsPasswordHide((prev) => !prev)}
                  >
                    <Text style={styles.passwordToggleBtnText}>
                      {isPasswordHide ? "Show" : "Hide"}
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.submitBtn}
                  onPress={() => {
                    onSubmit();
                    navigation.navigate("Home");
                  }}
                >
                  <Text style={styles.submitBtnText}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.registerBtn}
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.registerBtnText}>
                    Don't have an account?{" "}
                    <Text style={{ color: "#FF6C00" }}>Register</Text>
                  </Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  formContainer: {
    padding: 16,
    paddingTop: 0,
    backgroundColor: "#ffff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginVertical: 32,
    fontFamily: "RobotoMedium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    padding: 16,
    height: 50,
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    backgroundColor: "#F6F6F6",
  },

  passwordToggleBtn: {
    position: "absolute",
    top: "43%",
    right: 16,
  },

  passwordToggleBtnText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  submitBtn: {
    height: 43,
    marginTop: 43,
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  submitBtnText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#ffff",
  },

  registerBtn: {
    backgroundColor: "transparent",
    alignItems: "center",
    marginTop: 16,
  },

  registerBtnText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
