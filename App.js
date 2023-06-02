import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/main/Home";
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen";
import CommentsScreen from "./Screens/nestedScreens/CommentsScreen";
import MapScreen from "./Screens/nestedScreens/MapScreen";
// import { useRoute } from "./router";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // const routing = useRoute(true)
  const AuthStack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        {/* {routing} */}
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen name="Create post" component={CreatePostsScreen} />
          <AuthStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <AuthStack.Screen
            name="Coments"
            component={CommentsScreen}
            options={{}}
          />
          <AuthStack.Screen name="Map" component={MapScreen} options={{}} />
        </AuthStack.Navigator>
      </NavigationContainer>
    </>
  );
}
