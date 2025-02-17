import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/actions";

export default function AddItemScreen({ closeModal }) 
{
  const dispatch = useDispatch();

  const categories = [
    { label: "Fruits", value: "fruits", image: require("../../assets/images/fruits.jpg") },
    { label: "Vegetables", value: "vegetables", image: require("../../assets/images/15177.jpg") },
    { label: "Dairy", value: "dairy", image: require("../../assets/images/15177.jpg") },
    { label: "Meat", value: "meat", image: require("../../assets/images/15177.jpg") },
  ];

  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("fruits");  
  
  // Handle add item logic
  const handleAddItem = () => {
    if (itemName.trim() && quantity.trim()) 
    {
      dispatch(addItem({ id: Date.now(), name: itemName, quantity }));
      closeModal(); // Close modal after adding item
    }
  };

  return (
    <View style={styles.container}>
      {/* Category Picker */}
      <View style={styles.pickerContainer}>
        <Image source={categories.find((cat) => cat.value === selectedCategory)?.image} style={styles.categoryImage} />
        <View style={{width:"80%"}}>
          <Text style={styles.label}>Select Category</Text>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.picker}
          >
            {categories.map((category) => (
              <Picker.Item key={category.value} label={category.label} value={category.value} />
            ))}
          </Picker>
        </View>        
      </View>

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
      <View style={styles.buttonGroup}>
        <Button title="Add Item" onPress={handleAddItem} />
        <Button title="Cancel" onPress={closeModal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white", // Added background color for clarity
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16, // Adding font size for better readability
  },
  pickerContainer: {
    flexDirection:"row",
    // width: "80%",
    marginBottom: 20,
    alignItems: "center",
    gap:8
  },
  picker: {
    // width: "100%",
    height: 60,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  categoryImage: {
    width: 86,
    height: 86,
    resizeMode: "contain",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttonGroup: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
