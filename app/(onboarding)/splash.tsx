import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const hasCompletedOnboarding = await AsyncStorage.getItem("onboardingComplete");
      if (hasCompletedOnboarding) {
        router.replace("/(auth)/login"); // Skip to login if onboarding is complete
      } else {
        router.replace("/(onboarding)/onboarding"); // Show onboarding
      }
    };

    setTimeout(checkOnboardingStatus, 2000); // Simulate splash screen duration
  }, [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List App</Text>
      <ActivityIndicator size="large" color="#6200ea" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ea",
  },
});
