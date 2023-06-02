// import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";

// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   SafeAreaView,
//   FlatList,
//   Image,
// } from "react-native";
// import { Feather } from "@expo/vector-icons";

// import { POSTS } from "../../posts";

// export function PostsList() {
// const [posts, setPosts] = useState([]);

//   const navigation = useNavigation();

//   return (
//     <SafeAreaView>
//       <FlatList
//         data={posts}
//         renderItem={({ item }) => {
//           return (
//             <View style={styles.post}>
//               <View style={styles.postImgThumb}>
//                 <Image
//                   style={styles.postImg}
//                   source={{
//                     uri: item.image,
//                   }}
//                 />
//               </View>
//               <Text style={styles.postTitle}>{item.title}</Text>
//               <View style={styles.postTools}>
//                 <TouchableOpacity
//                   style={styles.postTool}
//                   onPress={() => {
//                     navigation.navigate("Coments");
//                   }}
//                 >
//                   <View style={{ transform: [{ scaleX: -1 }] }}>
//                     <Feather name="message-circle" size={24} color="#BDBDBD" />
//                   </View>
//                   <Text style={styles.postToolLabel}>{item.comments}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={styles.postTool}
//                   onPress={() => {
//                     navigation.navigate("Map");
//                   }}
//                 >
//                   <Feather name="map-pin" size={24} color="#BDBDBD" />
//                   <Text
//                     style={{
//                       ...styles.postToolLabel,
//                       color: "#212121",
//                       textDecorationLine: "underline",
//                     }}
//                   >
//                     {item.country}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           );
//         }}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   post: {
//     marginBottom: 32,
//     borderRadius: 8,
//   },
//   postImgThumb: {
//     width: "100%",
//     height: 240,
//     backgroundColor: "#7a7a7a",
//     borderRadius: 8,
//     overflow: "hidden",
//   },
//   postImg: {
//     width: "100%",
//     height: "100%",
//   },

//   postTitle: {
//     fontFamily: "RobotoMedium",
//     fontSize: 16,
//     lineHeight: 19,
//     color: "#212121",
//     marginTop: 8,
//   },
//   postTools: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 8,
//   },
//   postTool: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 6,
//   },
//   postToolLabel: {
//     fontFamily: "RobotoRegular",
//     fontSize: 16,
//     lineHeight: 19,
//     color: "#BDBDBD",
//   },
// });
