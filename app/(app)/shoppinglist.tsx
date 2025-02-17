import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, editItem } from "@/redux/actions";
import Icons from "@/utils/Icons";
import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";
import CustomCheckbox from "@/components/CustomCheckbox";

export default function ShoppingListScreen() {
  const shoppingList = useSelector((state) => state.shopping.shoppingList);
  const dispatch = useDispatch();

  const [checkedItems, setCheckedItems] = useState({});
  const handleCheckboxChange = (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],  // Toggle the checked state of the item
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <FlatList
        data={shoppingList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>            
            <View>
              <Text>{item.name}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </View>    
            
            <View style={{ flexDirection:"row", justifyContent:"center", alignContent:"center", gap:4 }}>        
              <CustomCheckbox 
                value={checkedItems[item.id] || false}
                onValueChange={() => handleCheckboxChange(item.id)}
              />
              <Pressable style={styles.editBtn}
                onPress={() => dispatch(editItem(item.id))}
              >
                <Icons name="edit" size={24} color="black" />
              </Pressable> 
              <Pressable style={styles.deleteBtn}
                onPress={() => dispatch(deleteItem(item.id))}
              >
                <Icons name="delete" size={24} color="white" />
              </Pressable> 
            </View>


          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    // textAlign: "flex-start",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    paddingLeft: 16,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    borderTopLeftRadius: 5,
    shadowColor: "grey",

  },
  editBtn:{
    width:32,
    height:32,
    padding:8,
    backgroundColor:"lightgray",
    borderRadius:"50%",

  },
  deleteBtn:{
    width:32,
    height:32,
    padding:8,
    backgroundColor:"red",
    borderRadius:"50%",
  }
});
