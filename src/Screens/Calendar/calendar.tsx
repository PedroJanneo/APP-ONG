import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useState } from "react";

export const Calendar = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState<string[]>([]);

  const handleAddList = () => {
    setList([...list, text]);
    setText("");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icons}
        onPress={() => router.navigate("/")}
      >
        <AntDesign name="leftcircleo" size={32} color="black" />
      </TouchableOpacity>


      {list.length > 0 ? (
        list.map((item) => <Text style={styles.textoVazio}>{item}</Text>)
      ) : (
        <Text style={styles.textoVazio}>Não há eventos agendados</Text>
      )}

      <TextInput
        style={styles.styleInput}
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity
        style={styles.styleButton}
        onPress={() => handleAddList()}
      >
        <Text style={styles.styleTextButton}>Adicionar evento</Text>
      </TouchableOpacity>
    </View>
  );
};
