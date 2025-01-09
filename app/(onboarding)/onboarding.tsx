import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

export default function Onboarding() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { id: 1, title: "Welcome", description: "Welcome to the Shopping List App!" },
    { id: 2, title: "Features", description: "Add, edit, and manage your shopping items." },
    { id: 3, title: "Get Started", description: "Let's get started!" },
  ];

  const handleScroll = (event) => {
    const page = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentPage(page);
  };

  const completeOnboarding = async () => {
    await AsyncStorage.setItem("onboardingComplete", "true");
    router.replace("/(auth)/login"); // Navigate to login after completing onboarding
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      >
        {pages.map((page) => (
          <View key={page.id} style={[styles.page, { width }]}>
            <Text style={styles.title}>{page.title}</Text>
            <Text style={styles.description}>{page.description}</Text>
          </View>
        ))}
      </ScrollView>
      <Button
        title={currentPage === pages.length - 1 ? "Get Started" : "Next"}
        onPress={() =>
          currentPage === pages.length - 1
            ? completeOnboarding()
            : setCurrentPage((prev) => prev + 1)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ea",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#333",
  },
});
