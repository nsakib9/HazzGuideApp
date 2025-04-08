import React, { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import ImageViewer from "react-native-image-zoom-viewer";
import Icon from "react-native-vector-icons/FontAwesome";

const maps = [
  {
    id: 1,
    title: "জেদ্দা এয়ারপোর্ট (King Abdulaziz International Airport)",
    description: "হজযাত্রীরা সাধারণত জেদ্দা এয়ারপোর্টে নামেন। এখান থেকেই মক্কা যাত্রা শুরু হয়।",
    image: require("../../assets/maps/1.png"),
  },
  {
    id: 2,
    title: "মক্কায় হোটেল / আবাসস্থল",
    description: "মক্কায় পৌঁছানোর পর হজযাত্রীরা হোটেল বা নির্ধারিত আবাসস্থলে অবস্থান করেন।",
    image: require("../../assets/maps/2.png"),
  },
  {
    id: 3,
    title: "মসজিদ আল-হারাম ও কাবা শরিফ",
    description: "তাওয়াফ এবং সাঈ করার জন্য প্রথমে হজযাত্রীরা কাবা শরিফে যান।",
    image: require("../../assets/maps/3.png"),
  },
  {
    id: 4,
    title: "সাফা ও মারওয়া পাহাড়",
    description: "কাবা শরিফে তাওয়াফ শেষে সাঈ (সাফা ও মারওয়ার মধ্যে চলাফেরা) সম্পন্ন করা হয়।",
    image: require("../../assets/maps/4.png"),
  },
  {
    id: 5,
    title: "মিনা",
    description: "৮ জিলহজ হজযাত্রীরা মিনায় অবস্থান করেন, নামাজ আদায় করেন ও বিশ্রাম নেন।",
    image: require("../../assets/maps/5.png"),
  },
  {
    id: 6,
    title: "আরাফাত ময়দান",
    description: "৯ জিলহজ আরাফাতে অবস্থান করা হজের মূল অংশ। এখানে খুতবা ও দোয়া হয়।",
    image: require("../../assets/maps/6.png"),
  },
  {
    id: 7,
    title: "মুজদালিফা",
    description: "আরাফাত থেকে ফেরার পথে মুজদালিফায় রাত যাপন ও কঙ্কর সংগ্রহ করা হয়।",
    image: require("../../assets/maps/7.png"),
  },
  {
    id: 8,
    title: "জামারাত (শয়তানের প্রতি কঙ্কর নিক্ষেপ)",
    description: "মিনায় ফিরে এসে তিনটি জামারাতে শয়তানের প্রতি কঙ্কর নিক্ষেপ করা হয়।",
    image: require("../../assets/maps/8.png"),
  },
  {
    id: 9,
    title: "কুরবানির স্থল ও ফেরার রাস্তাগুলো",
    description: "কুরবানির স্থান এবং মক্কায় ফেরার পথ।",
    image: require("../../assets/maps/9.png"),
  },
  {
    id: 10,
    title: "হালাক বা কেশ কাটা",
    description: "কুরবানির পর পুরুষরা মাথার চুল মুন্ডন করেন এবং নারীরা চুল ছোট করেন।",
    image: require("../../assets/maps/10.png"),
  },
  {
    id: 11,
    title: "তাওয়াফে ইফাদা",
    description: "মক্কায় ফিরে এসে হজের অন্যতম গুরুত্বপূর্ণ অংশ 'তাওয়াফে ইফাদা' সম্পন্ন করা হয়।",
    image: require("../../assets/maps/11.png"),
  },
  {
    id: 12,
    title: "তাওয়াফে বিদা (বিদায়ী তাওয়াফ)",
    description: "হজ শেষ করে মক্কা ছাড়ার আগে কাবা শরিফের বিদায়ী তাওয়াফ করা হয়।",
    image: require("../../assets/maps/12.png"),
  },
  {
    id: 13,
    title: "মদিনা (ঐচ্ছিক সফর)",
    description: "হজের পর অনেক হজযাত্রী মদিনায় যান। সেখানে মসজিদে নববী, রাসূল (সা.) এর রওজা শরিফ জিয়ারত করা হয়।",
    image: require("../../assets/maps/13.png"),
  }
]
;

export default function MapNavigationScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // Prepare imageUrls array for ImageViewer
  const imageUrls = maps.map((map) => ({
    url: "", // Leave empty for local images
    props: {
      source: map.image, // Pass the local image source here
    },
  }));

  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>হজের গুরুত্বপূর্ণ মানচিত্র</Text>
      <ScrollView>
        {maps.map((map, index) => (
          <TouchableOpacity key={map.id} style={styles.card} onPress={() => openModal(index)}>
            <View>
              <Image source={map.image} style={styles.mapImage} />
              {/* Overlay Message */}
              <View style={styles.zoomHintOverlay}>
                <Text style={styles.zoomHintText}>ক্লিক করে জুম করুন</Text>
              </View>
            </View>
            <Text style={styles.title}>{map.title}</Text>
            <Text style={styles.description}>{map.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Full-Screen Modal with ImageViewer */}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection="down"
        style={{ margin: 0, backgroundColor: "black" }}
      >
        <ImageViewer
          imageUrls={imageUrls}
          index={selectedImageIndex}
          enableSwipeDown={true}
          onSwipeDown={closeModal}
          renderIndicator={() => null} // Hide the image index indicator
        />
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Icon name="close" size={30} color="#fff" />
        </TouchableOpacity>
      </Modal>
    </View>
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
  zoomHintOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 4,
    alignItems: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  zoomHintText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
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
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
});