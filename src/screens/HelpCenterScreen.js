import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HelpCenterScreen() {
  const handleEmail = (email, subject) => {
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    Linking.openURL(mailto).catch((err) => console.error("Failed to open mail app:", err));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="envelope" size={32} color="#047857" />
        <Text style={styles.headerText}>সহায়তা কেন্দ্র (Help Center)</Text>
      </View>

      {/* Section 1: General Help */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>সাধারণ সহায়তা</Text>
        <Text style={styles.sectionText}>
          অ্যাপ ব্যবহার করতে সমস্যা হচ্ছে? আমাদেরকে জানাতে নিচে ক্লিক করুন।
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleEmail("support@hajjguideapp.com", "Hajj App Support")}
        >
          <Icon name="envelope" size={20} color="#fff" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>সাপোর্টে ইমেইল পাঠান</Text>
        </TouchableOpacity>
      </View>

      {/* Section 2: Suggestions */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>অ্যাপ উন্নয়নের পরামর্শ দিন</Text>
        <Text style={styles.sectionText}>
          নতুন ফিচার বা সংশোধনের কোনো পরামর্শ থাকলে আমাদের জানান।
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleEmail("wdshakib@gmail.com", "App Suggestion")}
        >
          <Icon name="lightbulb-o" size={20} color="#fff" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>পরামর্শ পাঠান</Text>
        </TouchableOpacity>
      </View>

      {/* Section 3: Collaboration */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>সহযোগিতার সুযোগ</Text>
        <Text style={styles.sectionText}>
          আপনি যদি ডেভেলপার, ডিজাইনার বা ইসলামিক গবেষক হন, আমাদের সঙ্গে কাজ করুন।
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleEmail("wdshakib@gmail.com", "Collaboration Inquiry")}
        >
          <Icon name="handshake-o" size={20} color="#fff" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>যোগাযোগ করুন</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          আপনার পরামর্শ আমাদের অ্যাপ আরও কার্যকর ও মানবিক করতে সাহায্য করে।
        </Text>
        <Text style={styles.footerMadeWith}>Made with ❤️ for pilgrims By Nazmus Shakib</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#047857",
    marginTop: 8,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#047857",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: "#4B5563",
    marginBottom: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#047857",
    padding: 12,
    borderRadius: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    marginTop: 24,
  },
  footerText: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 8,
  },
  footerMadeWith: {
    fontSize: 14,
    color: "#6B7280",
    fontStyle: "italic",
  },
});