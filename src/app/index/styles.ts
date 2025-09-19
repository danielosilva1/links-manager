import { colors } from "@/styles/colors";
import Constant from "expo-constants";
import { StyleSheet } from "react-native";

const statusBarHeight = Constant.statusBarHeight;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight + 8,
  },
  title: {
    color: colors.green[900],
    fontSize: 22,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  logo: {
    height: 32,
    width: 38,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  linksContent: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  }
});
