import { MaterialIcons } from "@expo/vector-icons";
import {
  Alert,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { LinkStorage, linkStorage } from "@/storage/link-storage";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { styles } from "./styles";

export default function Index() {
  const [category, setCategory] = useState(categories[0].label);
  const [links, setLinks] = useState<LinkStorage[]>([]);

  async function getLinks() {
    try {
      const response = await linkStorage.get();
      setLinks(response);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os links");
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories selected={category} onChange={setCategory} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link
            label={item.label}
            url={item.url}
            onDetails={() => console.log("Clicou...")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>

              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkLabel}>Rocketseat</Text>
            <Text style={styles.modalUrl}>https://rocketseat.com.br</Text>

            <View style={styles.modalFooter}>
              <Option label={"Excluir"} icon="delete" variant="secondary" />
              <Option label={"Abrir"} icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
