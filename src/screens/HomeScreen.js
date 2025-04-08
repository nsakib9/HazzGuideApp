import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Alert, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen({ navigation }) {
  const openWhatsApp = () => {
    const phoneNumber = "8801841442941"; // Replace with the actual phone number (without +)
    const message = encodeURIComponent("হজ্ব গাইড অ্যাপ থেকে যোগাযোগ করা হচ্ছে।"); // Auto message
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Error", "WhatsApp is not installed on your device.");
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

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
          <Text style={styles.menuText}>হজ্বের ধাপসমূহ</Text>
        </TouchableOpacity>

        {/* Important Duas */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("DuaCollection")}
        >
          <Icon name="book" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.menuText}>গুরুত্বপূর্ণ দোয়াগুলো</Text>
        </TouchableOpacity>

        {/* Live Map */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("MapNavigation")}
        >
          <Icon name="map" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.menuText}>লাইভ মানচিত্র / হজ্ব মানচিত্র</Text>
        </TouchableOpacity>

        {/* Preparation Tips */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Checklist")}
        >
          <Icon name="check-circle" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.menuText}>প্রস্তুতির পরামর্শ</Text>
        </TouchableOpacity>

        {/* Help Center */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("SettingsAbout")}
        >
          <Icon name="info-circle" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.menuText}>সহায়তা কেন্দ্র</Text>
        </TouchableOpacity>
      </View>

      {/* Developer Section */}
      <TouchableOpacity
        style={styles.developerCard}
        onPress={openWhatsApp}
      >
        <Image
          source={require("../../assets/dev.png")}
          style={styles.developerImage}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.developerTitle}>ডেভেলপারকে জানুন</Text>
          <Text style={styles.developerDescription}>
            আপনার হজ্ব এজেন্সির জন্য এমন বা অন্য কোন কাষ্টম একটি অ্যাপ তৈরি করাতে চান?
            সরাসরি যোগাযোগ করুন —
            {"\n"}📞 +8801841442941
            {"\n"}📧 wdshakib@gmail.com
          </Text>
        </View>
      </TouchableOpacity>
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
    fontFamily: "HindSiliguri-Bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "HindSiliguri-Regular",
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
    fontFamily: "HindSiliguri-Medium",
  },
  developerCard: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  developerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  developerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  developerDescription: {
    fontSize: 14,
    color: "#666",
  },
});