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
  Image,
} from "react-native";

export default function LoginScreen() {
  const [isKeybordShow, setIsKeybordShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  const onKeybordHide = () => {
    setIsKeybordShow(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    setIsKeybordShow(false);
    Keyboard.dismiss();
    console.log({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <TouchableWithoutFeedback onPress={onKeybordHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/background.jpg")}
        >
          <View
            style={{
              ...styles.formContainer,
              height: isKeybordShow ? 680 : 490,
            }}
          >
            <View style={styles.avatar}>
              <TouchableOpacity style={styles.addAvatarBtn}>
                <Image
                  style={styles.addAvatarImg}
                  source={require("../assets/images/add.png")}
                ></Image>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Register</Text>
            <View style={styles.form}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                  onFocus={() => setIsKeybordShow(true)}
                ></TextInput>
                <TextInput
                  style={{ ...styles.input, marginTop: 16 }}
                  placeholder="example@mail.com"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setIsKeybordShow(true)}
                ></TextInput>
                <View style={{ position: "relative" }}>
                  <TextInput
                    style={{ ...styles.input, marginTop: 16, paddingRight: 65 }}
                    placeholder="••••••••••••"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={isPasswordHide}
                    onFocus={() => setIsKeybordShow(true)}
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
                  onPress={onSubmit}
                >
                  <Text style={styles.submitBtnText}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerBtn}>
                  <Text style={styles.registerBtnText}>
                    Already have an account? <Text>Log in</Text>
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
    position: "relative",
    padding: 16,
    paddingTop: 92,
    backgroundColor: "#ffff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {},
  title: {
    marginBottom: 32,
    fontFamily: "RobotoMedium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  avatar: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -45 }],
    top: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  addAvatarBtn: {
    position: "absolute",
    right: -12,
    top: 80,
  },
  addAvatarImg: {},
  input: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#ffff",
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
    top: "50%",
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
