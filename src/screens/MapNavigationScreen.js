import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const maps = [
  {
    id: 1,
    title: "মক্কার গ্র্যান্ড মসজিদ (মসজিদুল হারাম)",
    description: "কাবা, তাওয়াফের দিক, এবং সাফা-মারওয়া পাহাড়ের অবস্থান।",
    image: require("../../assets/maps/makkah.png"), // Replace with your map image
  },
  {
    id: 2,
    title: "মিনার তাঁবু শহর",
    description: "তাঁবুর অবস্থান এবং জামারাতের পথ।",
    image: require("../../assets/maps/mina.png"), // Replace with your map image
  },
  {
    id: 3,
    title: "আরাফাত ময়দান",
    description: "আরাফার খুতবা স্থান এবং নামাজের স্থান।",
    image: require("../../assets/maps/arafat.png"), // Replace with your map image
  },
  {
    id: 4,
    title: "মুযদালিফা",
    description: "ঘুমানোর স্থান এবং পাথর সংগ্রহের এলাকা।",
    image: require("../../assets/maps/muzdalifah.png"), // Replace with your map image
  },
  {
    id: 5,
    title: "জামারাত (শয়তানকে পাথর নিক্ষেপ)",
    description: "ছোট, মাঝারি, এবং বড় জামারাতের অবস্থান।",
    image: require("../../assets/maps/jamarat.png"), // Replace with your map image
  },
  {
    id: 6,
    title: "কুরবানির স্থল ও ফেরার রাস্তাগুলো",
    description: "কুরবানির স্থান এবং মক্কায় ফেরার পথ।",
    image: require("../../assets/maps/slaughter.png"), // Replace with your map image
  },
];

export default function MapNavigationScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>হজের গুরুত্বপূর্ণ মানচিত্র</Text>
      {maps.map((map) => (
        <View key={map.id} style={styles.card}>
          <Image source={map.image} style={styles.mapImage} />
          <Text style={styles.title}>{map.title}</Text>
          <Text style={styles.description}>{map.description}</Text>
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
  },
  mapImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#047857",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#4B5563",
  },
});