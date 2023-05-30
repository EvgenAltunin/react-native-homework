import { Feather } from "@expo/vector-icons";
import { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

const POSTS = [
  {
    title: "Ergonomic Steel Pants",
    image: "https://loremflickr.com/640/480/nature",
    comments: 15,
    likes: 84,
    country: "Huntington",
    id: "1",
  },
  {
    title: "Sleek Bronze Mouse",
    image: "https://loremflickr.com/640/480/nature",
    comments: 73,
    likes: 36,
    country: "Longmont",
    id: "2",
  },
  {
    title: "Gorgeous Rubber Bacon",
    image: "https://loremflickr.com/640/480/nature",
    comments: 40,
    likes: 9,
    country: "Independence",
    id: "3",
  },
  {
    title: "Ergonomic Steel Pants",
    image: "https://loremflickr.com/640/480/nature",
    comments: 15,
    likes: 84,
    country: "Huntington",
    id: "4",
  },
  {
    title: "Sleek Bronze Mouse",
    image: "https://loremflickr.com/640/480/nature",
    comments: 73,
    likes: 36,
    country: "Longmont",
    id: "5",
  },
  {
    title: "Gorgeous Rubber Bacon",
    image: "https://loremflickr.com/640/480/nature",
    comments: 40,
    likes: 9,
    country: "Independence",
    id: "6",
  },
];

export default function PostsScreen() {
  const [posts, setPosts] = useState(POSTS);

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

      <SafeAreaView style={styles.postsList}>
        <FlatList
          data={posts}
          renderItem={({ item }) => {
            return (
              <View style={styles.post}>
                <View style={styles.postImgThumb}>
                  <Image
                    style={styles.postImg}
                    source={{
                      uri: item.image,
                    }}
                  />
                </View>
                <Text style={styles.postTitle}>{item.title}</Text>
                <View style={styles.postTools}>
                  <TouchableOpacity style={styles.postTool}>
                    <View style={{ transform: [{ scaleX: -1 }] }}>
                      <Feather name="message-circle" size={24} color="#BDBDBD" />
                    </View>
                    <Text style={styles.postToolLabel}>{item.comments}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.postTool}>
                    <Feather name="map-pin" size={24} color="#BDBDBD" />
                    <Text style={{...styles.postToolLabel, color: '#212121', textDecorationLine:'underline'}}>{item.country}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
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
  postsList: {
    marginBottom: 60,
    borderRadius: 8,
    overflow:'hidden'
  },
  post: {
    marginBottom: 32,
    borderRadius: 8,
  },
  postImgThumb: {
    width: "100%",
    height: 240,
    backgroundColor: "#7a7a7a",
    borderRadius: 8,
    overflow: "hidden",
  },
  postImg: {
    width: "100%",
    height: "100%",
  },

  postTitle: {
    fontFamily: "RobotoMedium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginTop: 8,
  },
  postTools: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  postTool: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  postToolLabel: {
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
