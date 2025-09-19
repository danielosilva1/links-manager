import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Image, TouchableOpacity, View } from "react-native";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            label="Rocketseat"
            url="https://rocketseat.com.br"
            onDetails={() => console.log("Clicou...")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
