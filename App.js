import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity, Linking, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import HomeScreen from "./src/screens/HomeScreen";
import StepByStepGuideScreen from "./src/screens/StepByStepGuideScreen";
import ChecklistScreen from "./src/screens/ChecklistScreen";
import DailyPlannerScreen from "./src/screens/DailyPlannerScreen";
import DuaCollectionScreen from "./src/screens/DuaCollectionScreen";
import MapNavigationScreen from "./src/screens/MapNavigationScreen";
import HelpCenterScreen from "./src/screens/HelpCenterScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const CURRENT_VERSION = "1.0.0"; // Replace with your app's current version

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updateUrl, setUpdateUrl] = useState("");

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

  const checkForUpdates = async () => {
    try {
      const response = await fetch("https://hajjguide.lskit.com/latest.json");
      const data = await response.json();

      if (data.latestVersion !== CURRENT_VERSION) {
        setUpdateAvailable(true);
        setUpdateUrl(data.updateUrl);
      }
    } catch (error) {
      Alert.alert("Error", "Could not check for updates. Please try again later.");
    }
  };

  useEffect(() => {
    const prepare = async () => {
      await loadFonts();
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
      SplashScreen.hideAsync();
    };

    prepare();
    checkForUpdates();
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
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

      {/* Update Modal */}
      <Modal visible={updateAvailable} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>নতুন সংস্করণ উপলব্ধ</Text>
            <Text style={styles.modalMessage}>
              সর্বশেষ ফিচার পেতে এখনই আপডেট করুন।
            </Text>
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => Linking.openURL(updateUrl)}
            >
              <Text style={styles.updateButtonText}>এখনই আপডেট করুন</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "HindSiliguri-Bold",
    color: "#047857",
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 16,
    fontFamily: "HindSiliguri-Regular",
    color: "#4B5563",
    textAlign: "center",
    marginBottom: 16,
  },
  updateButton: {
    backgroundColor: "#047857",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  updateButtonText: {
    fontSize: 16,
    fontFamily: "HindSiliguri-Bold",
    color: "#fff",
  },
});