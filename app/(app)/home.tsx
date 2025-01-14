import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Pressable, Modal } from "react-native";
import { useRouter } from "expo-router";

import { useSession } from "@/context/AuthContext";
import ShoppingListScreen from "./shoppinglist";
import Icons from "@/utils/Icons";
import AddItemScreen from "./addShoppingItem";

export default function HomeScreen() {
  const { session, SignOut } = useSession();
  const router = useRouter();

  const [isModalVisible, setIsModalVisible] = useState(false); 

  useEffect(() => {
    if (!session.user) {
      router.replace("/(auth)/login");
    }
  }, [session, router]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconLogo }>
          <Icons name="shopping-basket" color="black" size={16}/>
          <Text style={styles.logoTitle}>EasyShopper</Text>
        </View>
        <View>
          <Pressable
            onPress={SignOut}
          >
            <Text style={styles.title}>{session.username}</Text>
          </Pressable>
         
        </View>
        
      </View>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <AddItemScreen closeModal={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
             
      {/* <Button title="View Shopping List" onPress={() => router.push("/shoppinglist")} /> */}
         
      
      <ShoppingListScreen />
      <Pressable style={styles.addBtn}
        onPress={() => router.push("/addShoppingItem")} 
      >
        <Icons name="plus" color={"#ccc"} size={75}/>
        {/* <Text>Add Item</Text> */}
      </Pressable>  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    padding: 16,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 0,
  },

  iconLogo:
  {
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  logoTitle: {
    fontSize: 18,
    fontWeight: "bold",

    color:"black",
    marginTop: 0,
  },

  header:{
    flexDirection:"row",
    height:32,
    backgroundColor:"lightblue",
    alignItems:"center",
    paddingHorizontal: 8,
    marginBottom:8
  },

  addBtn:{
    position:"absolute",
    bottom: 10,
    right: "5%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"black",
    width: 86,
    height: 86,    
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",  // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    width: "80%",
    maxWidth: 400,
  },
});
