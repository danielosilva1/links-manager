import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface LinkProps {
  label: string;
  url: string;
  onDetails: () => void;
}

export function Link({ label, url, onDetails }: LinkProps) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.label} numberOfLines={1}>
          {label}
        </Text>

        <Text style={styles.url} numberOfLines={1}>
          {url}
        </Text>
      </View>

      <TouchableOpacity onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  );
}
