import { View, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "@/redux/actions";

export default function AddItemScreen({ closeModal }) 
{
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (itemName.trim() && quantity.trim()) {
      dispatch(addItem({ id: Date.now(), name: itemName, quantity }));
      // router.push("/shoppinglist");
      closeModal(); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={handleAddItem} />
      <Button title="Cancel" onPress={closeModal} />
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
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
