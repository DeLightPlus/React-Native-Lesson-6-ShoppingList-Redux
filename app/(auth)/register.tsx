import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleInputChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleRegister = () => {
    if (form.name && form.email && form.password) {
      // Add your registration logic here (e.g., API call)
      alert("Registration successful!");
      router.push("/login"); // Redirect to login after successful registration
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        placeholder="Name"
        value={form.name}
        onChangeText={(text) => handleInputChange("name", text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => handleInputChange("email", text)}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={form.password}
        onChangeText={(text) => handleInputChange("password", text)}
        style={styles.input}
        secureTextEntry
      />

      <Button title="Register" onPress={handleRegister} />

      <Text style={styles.link} onPress={() => router.push("/login")}>
        Already have an account? Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  link: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
});
