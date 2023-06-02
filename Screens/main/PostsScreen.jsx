import React from "react";
import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "../nestedScreens/DefaultPostsScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
      ></NestedScreen.Screen>
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
      ></NestedScreen.Screen>
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
      ></NestedScreen.Screen>
    </NestedScreen.Navigator>
  );
}
