import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { useSession } from "@/context/AuthContext";

export default function HomeScreen() {
  const { session, SignOut } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session.user) {
      router.replace("/(auth)/login");
    }
  }, [session, router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Shopping List App!</Text>
      <Text style={styles.title}>{session.username}</Text>
      <Button title="Sign Out" onPress={SignOut} />
      <Button title="Add Item" onPress={() => router.push("/addShoppingItem")} />
      <Button title="View Shopping List" onPress={() => router.push("/shoppinglist")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
