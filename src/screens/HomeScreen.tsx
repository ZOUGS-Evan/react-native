import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BilletService } from "../services/billetService";

type Billet = {
  id: string | number;
  Titre?: string;
  Contenu?: string;
};

export default function HomeScreen({ navigation }: any) {
  const [billets, setBillets] = useState<Billet[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // 🔐 check auth + load
  const loadBillets = async () => {
    try {
      const token = await AsyncStorage.getItem("auth_token");

      if (!token) {
        navigation.replace("Login");
        return;
      }

      const data = await BilletService.getBillets(token);

      setBillets(data);
    } catch (e) {
      alert("Erreur chargement des billets");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadBillets();
  }, []);

  // 🔄 refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await loadBillets();
  };

  // ⏳ loading
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

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>

      {/* HEADER SIMPLE */}
      <View
        style={{
          padding: 15,
          paddingTop: 50,
          borderBottomWidth: 1,
          borderColor: "#eee",
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          📰 Billets
        </Text>
        <Text style={{ color: "gray" }}>
          Tous les articles du blog
        </Text>
      </View>

      {/* LIST */}
      <FlatList
        data={billets}
        keyExtractor={(item) => String(item.id)}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        contentContainerStyle={{ padding: 15 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Billet", { id: item.id })
            }
            style={{
              padding: 15,
              marginBottom: 12,
              borderRadius: 12,
              backgroundColor: "#f5f5f5",
              borderWidth: 1,
              borderColor: "#eee",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {item.Titre ?? "Sans titre"}
            </Text>

            <Text
              numberOfLines={2}
              style={{ marginTop: 5, color: "gray" }}
            >
              {item.Contenu ?? "Aucun contenu"}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}
