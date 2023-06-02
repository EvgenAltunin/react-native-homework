import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { nanoid } from "nanoid";

import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
} from "react-native";

export default function CreatePostsScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const [isKeybordShow, setIsKeybordShow] = useState(false);
  const [placeName, setPlaceName] = useState("");
  const [placeLocation, setPlaceLocation] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const [currentLocation, setCurrentLocation] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
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

  const takePhoto = async (camera) => {
    try {
      if (camera) {
        const { uri } = await camera.takePictureAsync();
        setPhoto(uri);
        let locationRef = await Location.getCurrentPositionAsync({});
        const coords = {
          latitude: locationRef.coords.latitude,
          longitude: locationRef.coords.longitude,
        };
        await setCurrentLocation(coords);
      }
    } catch (error) {
      alert("Oops, something went wrong!");
      console.log(error);
    }
  };

  const pickImageAsync = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setPhoto(result.assets[0].uri);
      } else {
        alert("You did not select any image.");
      }
    } catch (error) {
      alert("Oops, something went wrong!");
      console.log(error);
    }
  };

  const onSubmit = () => {
    if (
      !photo ||
      placeName.trim().length === 0 ||
      placeLocation.trim().length === 0
    ) {
      alert("Fields must be filled!");
      return;
    }
    navigation.navigate("Posts", {
      image: photo,
      name: placeName,
      location: placeLocation,
      currentLocation,
      id: nanoid(),
    });
    setIsKeybordShow(false);
    Keyboard.dismiss();
    setPlaceName("");
    setPlaceLocation("");
    setPhoto(null);
  };

  return (
    <TouchableWithoutFeedback onPress={onKeybordHide}>
      <View style={styles.container}>
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
          <Camera style={styles.camera} type={type} ref={setCamera}>
            <View style={styles.photoView}>
              {photo && (
                <View style={styles.takenPhotoContainer}>
                  <Image
                    source={{ uri: photo }}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </View>
              )}
              {!photo && (
                <TouchableOpacity
                  style={styles.takePhotoBtn}
                  onPress={() => {
                    takePhoto(camera);
                  }}
                >
                  <FontAwesome name="camera" size={24} color="white" />
                </TouchableOpacity>
              )}
              {!photo && (
                <TouchableOpacity
                  style={styles.flipBtn}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <MaterialCommunityIcons
                    name="camera-flip-outline"
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>
              )}
            </View>
          </Camera>
        </View>
        {photo ? (
          <TouchableOpacity
            style={styles.editPhotoBtn}
            onPress={() => {
              setPhoto(null), setPhoto(null);
            }}
          >
            <Text style={styles.editPhotoBtnText}>Edit photo</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.editPhotoBtn}
            onPress={() => {
              pickImageAsync();
            }}
          >
            <Text style={styles.editPhotoBtnText}>Choose photo</Text>
          </TouchableOpacity>
        )}

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
                style={{
                  ...styles.input,
                  borderBottomColor:
                    focusedInput === "placeName" ? "#FF6C00" : "#E8E8E8",
                }}
                placeholder="Place name..."
                value={placeName}
                onChangeText={setPlaceName}
                onFocus={() => {
                  setIsKeybordShow(true), setFocusedInput("placeName");
                }}
                onBlur={() => {
                  setFocusedInput(null);
                }}
              ></TextInput>
              <View style={{ position: "relative" }}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderBottomColor:
                      focusedInput === "placeLocation" ? "#FF6C00" : "#E8E8E8",
                    paddingLeft: 32,
                  }}
                  placeholder="Location..."
                  value={placeLocation}
                  onChangeText={setPlaceLocation}
                  onFocus={() => {
                    setIsKeybordShow(true), setFocusedInput("placeLocation");
                  }}
                  onBlur={() => {
                    setFocusedInput(null);
                  }}
                ></TextInput>
                <View style={{ position: "absolute", top: "27%" }}>
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.submitBtn}
                onPress={() => {
                  onSubmit();
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
    position: "relative",
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

  takenPhotoContainer: {
    position: "absolute",
    resizeMode: "cover",
    top: 0,
    left: 0,
    height: 240,
    width: "100%",
  },

  takePhotoBtn: {
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },

  flipBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },

  editPhotoBtn: {
    alignSelf: "flex-start",
    marginTop: 8,
  },

  editPhotoBtnText: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
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
  },
});
