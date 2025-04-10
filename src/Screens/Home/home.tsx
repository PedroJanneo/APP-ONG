import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import logo_crianca from "@/src/images/logo_crianca.png";
import { styles } from "./styles";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";


export const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconConfig}>
        
      <AntDesign
        name="setting"
        size={50}
        color="black"
        
      />

      </TouchableOpacity>
      <Image source={logo_crianca} style={styles.logo} resizeMode="contain" />
      <TouchableOpacity style={styles.icons} onPress={() => router.navigate("/maps")}>
        <MaterialCommunityIcons
          name="google-maps"
          size={50}
          color="black"
          
        />
      </TouchableOpacity>

    <TouchableOpacity style={styles.icons} onPress={() => router.navigate("/calendar")}>
      <FontAwesome5
        name="calendar-alt"
        size={50}
        color="black"
        
      />
      </TouchableOpacity>
    <TouchableOpacity style={styles.icons} onPress={() => router.navigate("/cadastro")}>
      <MaterialCommunityIcons
        name="notebook"
        size={50}
        color="black"
      />
      </TouchableOpacity>
    </View>
  );
};
