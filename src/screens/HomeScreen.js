import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      

      {/* Menu Buttons */}
      <View style={styles.menuContainer}>

{/* Header Section */}
<View style={styles.header}>
        <Text style={styles.title}>হজ্ব গাইড</Text>
        <Text style={styles.subtitle}>আপনার আত্মিক সফরের বিশ্বস্ত সহচর</Text>
      </View>

        {/* Hajj Steps */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("StepByStepGuide")}
        >
          <Icon name="list-alt" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.menuText}>Hajj Steps</Text>
        </TouchableOpacity>

        {/* Important Duas */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("DuaCollection")}
        >
          <Icon name="book" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.menuText}>Important Duas</Text>
        </TouchableOpacity>

        {/* Live Map */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("MapNavigation")}
        >
          <Icon name="map" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.menuText}>Live Map</Text>
        </TouchableOpacity>

        {/* Preparation Tips */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Checklist")}
        >
          <Icon name="check-circle" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.menuText}>Preparation Tips</Text>
        </TouchableOpacity>

        {/* Help Center */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("SettingsAbout")}
        >
          <Icon name="info-circle" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.menuText}>Help Center</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#047857",
      padding: 16,
    },
    header: {
      marginTop: 24,
      alignItems: "center",
    },
    title: {
      fontSize: 32,
      fontFamily: "HindSiliguri-Bold", // Bold font for the title
      color: "#fff",
      textAlign: "center",
    },
    subtitle: {
      fontSize: 16,
      fontFamily: "HindSiliguri-Regular", // Regular font for the subtitle
      color: "#fff",
      textAlign: "center",
      marginTop: 8,
    },
    menuContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 16,
    },
    menuButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#D97706",
      padding: 16,
      borderRadius: 8,
      width: "90%",
    },
    icon: {
      marginRight: 16,
    },
    menuText: {
      color: "#fff",
      fontSize: 18,
      fontFamily: "HindSiliguri-Medium", // Medium font for menu text
    },
  });