import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./style";
import maps from "@/src/images/mapa.png";
import { useRouter } from "expo-router";

export const Maps = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icons}>
        <AntDesign name="leftcircleo" size={50} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconConfig}>
        <AntDesign name="setting" size={50} color="black" />
      </TouchableOpacity>

      <Image source={maps} style={styles.mapa} resizeMode="contain" />

      <TouchableOpacity style={styles.buttonMaps}>
        <Text style={styles.textButton}>Solicitar entrega</Text>
      </TouchableOpacity>
    </View>
  );
};
