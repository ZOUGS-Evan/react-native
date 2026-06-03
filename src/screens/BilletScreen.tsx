import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BilletService } from "../services/billetService";
import Post from "../components/Post";

type Billet = {
  id: string | number;
  Titre?: string;
  Contenu?: string;
  Date?: string;
};

export default function BilletScreen({ route, navigation }: any) {
  const { id } = route.params;

  const [billet, setBillet] = useState<Billet | null>(null);
  const [loading, setLoading] = useState(true);

  const loadBillet = async () => {
    try {
      const token = await AsyncStorage.getItem("auth_token");

      if (!token) {
        navigation.replace("Login");
        return;
      }

      const data = await BilletService.getBilletById(id, token);

      setBillet(data);
    } catch (e) {
      alert("Erreur chargement billet");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBillet();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Chargement...</Text>
      </View>
    );
  }

  if (!billet) {
    return (
      <View style={{ padding: 20 }}>
        <Text>❌ Billet introuvable</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>

      {/* HEADER */}
      <View
        style={{
          padding: 15,
          paddingTop: 50,
          borderBottomWidth: 1,
          borderColor: "#eee",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          {billet.Titre}
        </Text>

        <Text style={{ color: "gray", marginTop: 5 }}>
          {billet.Date}
        </Text>
      </View>

      {/* CONTENT */}
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 16, lineHeight: 22 }}>
          {billet.Contenu}
        </Text>

        {/* COMMENTS */}
        <Post id={String(id)} />
      </View>

    </ScrollView>
  );
}
