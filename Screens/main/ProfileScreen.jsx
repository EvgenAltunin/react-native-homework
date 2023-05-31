import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { PostsListProfile } from "../../components/PostsList/PostsListProfile";

export default function ProfileScreen() {
  const [name, setName] = useState("Natali Romanova");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/background.jpg")}
      >
        <View style={styles.profileContainer}>
          <TouchableOpacity
            style={{ paddingRight: 16, alignSelf: "flex-end" }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={styles.profileName}>{name}</Text>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatarImg}
              source={require("../../assets/images/avatar.jpg")}
            ></Image>
            <TouchableOpacity style={styles.addAvatarBtn} activeOpacity={0.7}>
              <Image
                style={styles.addAvatarImg}
                source={require("../../assets/images/add.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.postsContainer}>
            <PostsListProfile />
          </View>
        </View>
      </ImageBackground>
    </View>
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

  profileContainer: {
    position: "relative",
    padding: 16,
    paddingTop: 22,
    height: 620,
    backgroundColor: "#ffff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  avatarWrapper: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -45 }],
    top: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  avatarImg: {
    height: "100%",
    width: "100%",
    borderRadius: 16,
  },

  addAvatarBtn: {
    position: "absolute",
    right: -12,
    top: 80,
  },
  profileName: {
    paddingTop: 46,
    paddingBottom: 32,
    alignSelf: "center",
    fontFamily: "RobotoMedium",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
  },

  postsContainer: {
    marginBottom: 100,
    borderRadius: 8,
    overflow: "hidden",
  },
});
