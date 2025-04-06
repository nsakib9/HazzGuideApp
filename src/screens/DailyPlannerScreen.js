import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const dailyPlans = [
  {
    id: 1,
    dayHeader: "৮ জিলহজ্ব - মিনায় যাত্রা",
    dateInfo: "৮ জিলহজ্ব / ১৪ জুন ২০২৫",
    primaryRituals: ["ইহরাম পরিধান", "মিনায় অবস্থান"],
    optionalActivities: ["নফল নামাজ", "কুরআন তিলাওয়াত"],
    checklist: ["পাথর সংগ্রহ"],
    dua: "হে আল্লাহ! আমাদের হজ্ব কবুল করুন।",
    motivationalQuote: "“হজ্ব হলো আত্মশুদ্ধির এক মহাসুযোগ।”",
  },
  {
    id: 2,
    dayHeader: "৯ জিলহজ্ব - আরাফাতে অবস্থান",
    dateInfo: "৯ জিলহজ্ব / ১৫ জুন ২০২৫",
    primaryRituals: ["আরাফাতে খুতবা শোনা", "নামাজ আদায়"],
    optionalActivities: ["দোয়া ও ইস্তিগফার", "কুরআন তিলাওয়াত"],
    checklist: ["আরাফাতে অবস্থান ✅"],
    dua: "হে আল্লাহ! আমাদের ক্ষমা করুন।",
    motivationalQuote: "“আরাফাতের দিন দোয়া কবুলের শ্রেষ্ঠ সময়।”",
  },
  {
    id: 3,
    dayHeader: "১০ জিলহজ্ব - কুরবানি ও জামারাতে কঙ্কর নিক্ষেপ",
    dateInfo: "১০ জিলহজ্ব / ১৬ জুন ২০২৫",
    primaryRituals: ["কুরবানি", "জামারাতে কঙ্কর নিক্ষেপ"],
    optionalActivities: ["তাওয়াফ", "সাঈ"],
    checklist: ["কুরবানি ✅", "কঙ্কর নিক্ষেপ ✅"],
    dua: "হে আল্লাহ! আমাদের ত্যাগ কবুল করুন।",
    motivationalQuote: "“ত্যাগের মাধ্যমে আল্লাহর নৈকট্য অর্জন করুন।”",
  },
  // Add more days as needed
];

export default function DailyPlannerScreen() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (dayId, item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [dayId]: {
        ...prev[dayId],
        [item]: !prev[dayId]?.[item],
      },
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>দৈনিক পরিকল্পনা</Text>
      {dailyPlans.map((plan) => (
        <View key={plan.id} style={styles.card}>
          <Text style={styles.dayHeader}>{plan.dayHeader}</Text>
          <Text style={styles.dateInfo}>{plan.dateInfo}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <Icon name="check-circle" size={16} color="#047857" /> বাধ্যতামূলক ইবাদত
            </Text>
            {plan.primaryRituals.map((ritual, index) => (
              <Text key={index} style={styles.listItem}>
                🕋 {ritual}
              </Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <Icon name="star" size={16} color="#047857" /> সুন্নত ও নফল
            </Text>
            {plan.optionalActivities.map((activity, index) => (
              <Text key={index} style={styles.listItem}>
                📿 {activity}
              </Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <Icon name="tasks" size={16} color="#047857" /> চেকলিস্ট
            </Text>
            {plan.checklist.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => toggleCheck(plan.id, item)}
                style={styles.checklistItem}
              >
                <Text style={styles.listItem}>
                  {checkedItems[plan.id]?.[item] ? "✅" : "⬜"} {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              <Icon name="heart" size={16} color="#047857" /> দোয়া
            </Text>
            <Text style={styles.dua}>{plan.dua}</Text>
          </View>

          <Text style={styles.motivationalQuote}>
            🌙 {plan.motivationalQuote}
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
  },
  dayHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#047857",
    marginBottom: 8,
  },
  dateInfo: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#047857",
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    color: "#4B5563",
    marginBottom: 4,
  },
  checklistItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  dua: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#4B5563",
  },
  motivationalQuote: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 16,
    fontStyle: "italic",
  },
});