import React, { useState } from "react";
import { useRouter, useSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "@/redux/actions";

export default function EditItem() {
  const { id } = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const item = useSelector((state) =>
    state.items.find((item) => item.id === parseInt(id))
  );

  const [name, setName] = useState(item?.name || "");
  const [quantity, setQuantity] = useState(item?.quantity || "");

  const handleSubmit = () => {
    dispatch(editItem(parseInt(id), { name, quantity }));
    router.push("/(app)");
  };

  return (
    <View>
      <TextInput
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Save Changes" onPress={handleSubmit} />
    </View>
  );
}
