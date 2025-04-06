import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading"; // For loading screen
import HomeScreen from "./src/screens/HomeScreen";
import StepByStepGuideScreen from "./src/screens/StepByStepGuideScreen";
import ChecklistScreen from "./src/screens/ChecklistScreen";
import DailyPlannerScreen from "./src/screens/DailyPlannerScreen";
import DuaCollectionScreen from "./src/screens/DuaCollectionScreen";
import MapNavigationScreen from "./src/screens/MapNavigationScreen";
import HelpCenterScreen from "./src/screens/HelpCenterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "HindSiliguri-Regular": require("./assets/fonts/HindSiliguri-Regular.ttf"),
      "HindSiliguri-Bold": require("./assets/fonts/HindSiliguri-Bold.ttf"),
      "HindSiliguri-Light": require("./assets/fonts/HindSiliguri-Light.ttf"),
      "HindSiliguri-Medium": require("./assets/fonts/HindSiliguri-Medium.ttf"),
      "HindSiliguri-SemiBold": require("./assets/fonts/HindSiliguri-SemiBold.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="StepByStepGuide" component={StepByStepGuideScreen} />
        <Stack.Screen name="Checklist" component={ChecklistScreen} />
        <Stack.Screen name="DailyPlanner" component={DailyPlannerScreen} />
        <Stack.Screen name="DuaCollection" component={DuaCollectionScreen} />
        <Stack.Screen name="MapNavigation" component={MapNavigationScreen} />
        <Stack.Screen name="SettingsAbout" component={HelpCenterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}