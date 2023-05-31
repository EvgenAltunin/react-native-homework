
import { useState } from "react";

import { StyleSheet, View, Text, Image } from "react-native";
import { PostsList } from "../../components/PostsList/PostsList";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatarThumb}>
          <Image
            style={styles.avatarImg}
            source={{
              uri: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/850.jpg",
            }}
          />
        </View>
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.postsContainer}>
        <PostsList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "white",
    height: "100%",
  },
  avatarThumb: {
    height: 60,
    width: 60,
    backgroundColor: "#7a7a7a",
    borderRadius: 16,
    overflow: "hidden",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  userInfoText: {
    marginLeft: 8,
  },
  userName: {
    fontFamily: "RobotoBold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "RobotoRegular",
    fontSize: 11,
    lineHeight: 13,
    color: "#4D4D4D",
  },
  postsContainer: {
    marginBottom: 60,
    borderRadius: 8,
    overflow: "hidden",
  },
});
