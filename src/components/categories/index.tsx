import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "../category";
import { styles } from "./styles";

interface CategoriesProps {
  selected: string;
  onChange: (category: string) => void;
}

export function Categories({ selected, onChange }: CategoriesProps) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          label={item.label}
          icon={item.icon}
          isSelected={item.label === selected}
          onPress={() => onChange(item.label)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
