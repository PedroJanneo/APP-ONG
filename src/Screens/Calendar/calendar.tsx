import { Text, View } from "react-native";
import { styles } from "./style";



export const Calendar = () => {
  return (
    <View style={styles.container}>
     <View style={styles.containerVazio}>

        <Text style={styles.textoVazio}>Não há eventos agendados</Text>
     </View>
    </View>
  );
}