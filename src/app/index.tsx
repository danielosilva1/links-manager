import { MaterialIcons } from "@expo/vector-icons";
import {
  Alert,
  FlatList,
  Image,
  Linking,
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
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState(categories[0].label);
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [selectedLink, setSelectedLink] = useState<LinkStorage>(
    {} as LinkStorage
  );

  async function getLinks() {
    try {
      const response = await linkStorage.get();
      const filteredLinks = response.filter(
        (link) => link.category === category
      );

      setLinks(filteredLinks);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível listar os links");
    }
  }

  function handleDetails(selected: LinkStorage) {
    setShowModal(true);
    setSelectedLink(selected);
  }

  async function linkRemove() {
    try {
      await linkStorage.remove(selectedLink.id);
      getLinks();
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível remover");
      console.error(error);
    }
  }

  function handleRemove() {
    Alert.alert("Excluir", "Deseja realmente remover?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: linkRemove },
    ]);
  }

  async function handleOpen() {
    try {
      await Linking.openURL(selectedLink.url);
      setShowModal(false);
    } catch (error) {
      Alert.alert("Link", "Não foi possível abrir o link");
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category])
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
            onDetails={() => handleDetails(item)}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>{selectedLink.category}</Text>

              <TouchableOpacity onPress={() => setShowModal(false)}>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkLabel}>{selectedLink.label}</Text>
            <Text style={styles.modalUrl}>{selectedLink.url}</Text>

            <View style={styles.modalFooter}>
              <Option
                label={"Excluir"}
                icon="delete"
                variant="secondary"
                onPress={handleRemove}
              />
              <Option label={"Abrir"} icon="language" onPress={handleOpen} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
