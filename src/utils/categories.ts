import { MaterialIcons } from "@expo/vector-icons";

type Category = {
  id: string;
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export const categories: Category[]  = [
  { id: "1", label: "Curso", icon: "code"},
  { id: "2", label: "Projeto", icon: "folder"},
  { id: "3", label: "Site", icon: "language"},
  { id: "4", label: "Artigo", icon: "newspaper"},
  { id: "5", label: "Vídeo", icon: "movie"},
  { id: "6", label: "Documentação", icon: "content-paste"},
];
