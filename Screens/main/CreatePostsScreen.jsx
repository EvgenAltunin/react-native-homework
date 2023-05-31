import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome, Feather } from "@expo/vector-icons";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function CreatePostsScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [isKeybordShow, setIsKeybordShow] = useState(false);
  const [placeName, setPlaceName] = useState("");
  const [location, setLocation] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onKeybordHide = () => {
    setIsKeybordShow(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    console.log({ placeName, location });
    setIsKeybordShow(false);
    Keyboard.dismiss();
    setPlaceName("");
    setLocation("");
  };

  return (
    <TouchableWithoutFeedback onPress={onKeybordHide}>
      <View style={styles.container}>
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
          <Camera style={styles.camera} type={type} ref={setCameraRef}>
            <View style={styles.photoView}>
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  if (cameraRef) {
                    const { uri } = await cameraRef.takePictureAsync();
                    await MediaLibrary.createAssetAsync(uri);
                  }
                }}
              >
                <FontAwesome name="camera" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
        <TouchableOpacity style={styles.editPhotoBtn}>
          <Text style={styles.editPhotoBtnText}>Edit photo</Text>
        </TouchableOpacity>
        <View
          style={{
            ...styles.formContainer,
            height: isKeybordShow ? 670 : 490,
          }}
        >
          <View style={styles.form}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.input}
                placeholder="Place name..."
                value={placeName}
                onChangeText={setPlaceName}
                onFocus={() => setIsKeybordShow(true)}
              ></TextInput>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={{ ...styles.input, paddingLeft: 32 }}
                  placeholder="Location..."
                  value={location}
                  onChangeText={setLocation}
                  onFocus={() => setIsKeybordShow(true)}
                ></TextInput>
                <TouchableOpacity
                  style={{ position: "absolute", top: "27%" }}
                  onPress={() => {
                    navigation.navigate("Map");
                  }}
                >
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.submitBtn}
                onPress={() => {
                  onSubmit();
                  // navigation.navigate("Home");
                }}
              >
                <Text style={styles.submitBtnText}>PUBLISH</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "white",
    height: "100%",
  },
  camera: {
    height: 240,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },

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

  submitBtn: {
    height: 51,
    marginTop: 32,
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

  editPhotoBtn: {
    marginTop: 8,
  },
  editPhotoBtnText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  form: {
    marginTop: 32,
  },

  input: {
    height: 50,
    fontFamily: "RobotoMedium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
});
