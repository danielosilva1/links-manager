import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Add() {
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState(categories[0].label);

  function handleAdd() {
    console.log({ label, url, category });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories selected={category} onChange={setCategory} />

      <View style={styles.form}>
        <Input
          placeholder="Nome do link"
          onChangeText={setLabel}
          autoCorrect={false}
        />
        <Input placeholder="Url" onChangeText={setUrl} autoCorrect={false} />

        <Button label="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
