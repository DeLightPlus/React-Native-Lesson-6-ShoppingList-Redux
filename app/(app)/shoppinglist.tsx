import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "@/redux/actions";

export default function ShoppingListScreen() {
  const shoppingList = useSelector((state) => state.shopping.shoppingList);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <FlatList
        data={shoppingList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Button title="Delete" onPress={() => dispatch(deleteItem(item.id))} />
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});
