import { View, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { styles } from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import profile from "../../images/profile.png";

export const Cadastro = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icons} onPress={() => router.navigate("/")}>
        <AntDesign name="leftcircleo" size={32} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconConfig}>
        <AntDesign name="setting" size={32} color="black" />
      </TouchableOpacity>

      <View style={styles.photoContainer}>
        <Image 
          source={profile} 
          style={styles.profilePhoto}
        />
        <Text style={styles.photoText}>INSERIR FOTO</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="NOME"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="SOBRENOME"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="CPF / RG"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="DATA DE NASCIMENTO"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="ENDEREÇO"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="NOME PAI OU MÃE"
          placeholderTextColor="#000"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>EXCLUIR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.generateButton}>
          <Text style={styles.generateButtonText}>GERAR RA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};