import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

import { useSession } from "@/context/AuthContext";
import ShoppingListScreen from "./shoppinglist";
import Icons from "@/utils/Icons";

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

             
        {/* <Button title="View Shopping List" onPress={() => router.push("/shoppinglist")} /> */}
         
      
      <ShoppingListScreen />
      <Pressable style={styles.addBtn}
        onPress={() => router.push("/addShoppingItem")} 
      >
        <Icons name="plus" color={"#ccc"} size={75}/>
        {/* <Text>Add Item</Text> */}
      </Pressable> 

      {/* <Text style={styles.title}>Welcome to the Shopping List App!</Text> */}
      
      
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
    
  }
});
