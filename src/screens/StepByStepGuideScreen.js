import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const steps = [
  { id: 1, title: "ইহরাম", description: "ইহরাম বাঁধা এবং নিয়ত করা।", icon: "user" },
  { id: 2, title: "তাওয়াফ", description: "কাবা শরীফের চারপাশে সাতবার ঘোরা।", icon: "circle-o" },
  { id: 3, title: "সাঈ", description: "সাফা ও মারওয়া পাহাড়ের মধ্যে সাতবার দৌড়ানো।", icon: "road" },
  { id: 4, title: "আরাফাতে অবস্থান", description: "আরাফাত ময়দানে অবস্থান করা।", icon: "map-marker" },
  { id: 5, title: "মুজদালিফা", description: "মুজদালিফায় রাত যাপন এবং কঙ্কর সংগ্রহ।", icon: "bed" },
  { id: 6, title: "কুরবানি", description: "কুরবানি করা এবং মাথা মুণ্ডানো।", icon: "cut" },
  { id: 7, title: "কঙ্কর নিক্ষেপ", description: "জামারাতে কঙ্কর নিক্ষেপ করা।", icon: "hand-o-up" },
];

export default function StepByStepGuideScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>হজের ধাপসমূহ</Text>
      {steps.map((step, index) => (
        <View key={step.id} style={styles.card}>
          <View style={styles.iconContainer}>
            <Icon name={step.icon} size={32} color="#047857" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{step.title}</Text>
            <Text style={styles.description}>{step.description}</Text>
          </View>
          <Text style={styles.progress}>
            {index + 1} / {steps.length}
          </Text>
        </View>
      ))}
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#047857",
    textAlign: "center",
    marginBottom: 16,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#047857",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#4B5563",
  },
  progress: {
    fontSize: 12,
    color: "#6B7280",
  },
});