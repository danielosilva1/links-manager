import { MaterialIcons } from "@expo/vector-icons";
import {
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

      <Modal transparent visible={true}>
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
