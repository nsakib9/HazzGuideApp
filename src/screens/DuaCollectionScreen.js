import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const duas = [
  {
    id: 1,
    title: "তাওয়াফের দোয়া",
    arabic: "ٱللَّهُـمَّ اجْعَلْهُ حَجًّا مَبْرُورًا",
    pronunciation: "“আল্লাহুম্মাজ আলহু হাজ্জাম মাবরুরা”",
    translation: "হে আল্লাহ! এটি যেন কবুলকৃত হজ্ব হয়।",
  },
  {
    id: 2,
    title: "সাঈ শুরুর দোয়া",
    arabic: "ٱبْدَأُ بِمَا بَدَأَ ٱللَّهُ بِهِ",
    pronunciation: "“আব্দা-উ বিমা বাদা-আল্লাহু বিহি”",
    translation: "আমি সেখান থেকেই শুরু করবো যেখান থেকে আল্লাহ শুরু করেছেন।",
  },
  {
    id: 3,
    title: "আরাফার দোয়া",
    arabic: "ٱللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي",
    pronunciation: "“আল্লাহুম্মাগফির লি ওয়ারহামনি”",
    translation: "হে আল্লাহ! আমাকে ক্ষমা করুন এবং করুণা করুন।",
  },
  {
    id: 4,
    title: "মুযদালিফার দোয়া",
    arabic: "رَبَّنَا آتِنَا فِي ٱلدُّنْيَا حَسَنَةً",
    pronunciation: "“রাব্বানা আতিনা ফিদ্দুনিয়া হাসানাহ”",
    translation: "হে আমাদের প্রতিপালক! আমাদেরকে দুনিয়াতে কল্যাণ দান করুন।",
  },
  {
    id: 5,
    title: "কঙ্কর নিক্ষেপের দোয়া",
    arabic: "بِسْمِ ٱللَّهِ، ٱللَّهُ أَكْبَرُ",
    pronunciation: "“বিসমিল্লাহি, আল্লাহু আকবার”",
    translation: "আল্লাহর নামে, আল্লাহ মহান।",
  },
  {
    id: 6,
    title: "কুরবানির দোয়া",
    arabic: "إِنَّ صَلَاتِي وَنُسُكِي لِلَّهِ رَبِّ ٱلْعَالَمِينَ",
    pronunciation: "“ইন্না সালাতি ওয়ানুসুকি লিল্লাহি রাব্বিল আলামিন”",
    translation: "নিশ্চয়ই আমার নামাজ এবং কুরবানি শুধু আল্লাহর জন্য।",
  },
  {
    id: 7,
    title: "মিনা ত্যাগের দোয়া",
    arabic: "ٱللَّهُمَّ تَقَبَّلْ مِنِّي",
    pronunciation: "“আল্লাহুম্মা তাকাব্বাল মিন্নি”",
    translation: "হে আল্লাহ! আমার আমল কবুল করুন।",
  },
];

export default function DuaCollectionScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>হজের গুরুত্বপূর্ণ দোয়া</Text>
      {duas.map((dua) => (
        <View key={dua.id} style={styles.card}>
          <Text style={styles.title}>{dua.title}</Text>
          <Text style={styles.arabic}>{dua.arabic}</Text>
          <Text style={styles.pronunciation}>{dua.pronunciation}</Text>
          <Text style={styles.translation}>{dua.translation}</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#047857",
    marginBottom: 8,
  },
  arabic: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "right",
    marginBottom: 8,
  },
  pronunciation: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#4B5563",
    marginBottom: 8,
  },
  translation: {
    fontSize: 16,
    color: "#4B5563",
  },
});