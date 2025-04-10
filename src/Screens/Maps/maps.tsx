import { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./style";
import maps from "../../images/mapa.png";
import { useRouter } from "expo-router";

export const Maps = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [list, setList] = useState<string[]>([]);

  const handleAddList = () => {
    if (text.trim()) {
      setList([...list, text]);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icons} onPress={() => router.navigate("/")}>
        <AntDesign name="leftcircleo" size={32} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconConfig}>
        <AntDesign name="setting" size={32} color="black" />
      </TouchableOpacity>

      <Image source={maps} style={styles.mapa} resizeMode="contain" />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.styleInput}
          onChangeText={setText}
          value={text}
          placeholder="Digite o CEP para a entrega"
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          style={styles.buttonMaps}
          onPress={handleAddList}
        >
          <Text style={styles.textButton}>Solicitar entrega</Text>
        </TouchableOpacity>
      </View>

      {list.length > 0 && (
        <View style={styles.listContainer}>
          {list.map((item, index) => (
            <Text key={index} style={styles.listItem}>{item}</Text>
          ))}
        </View>
      )}
    </View>
  );
};
