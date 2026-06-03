import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BilletService } from "../services/billetService";

export default function LoginScreen({ navigation }: any) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);

      const token = await BilletService.login(email, password);

      await AsyncStorage.setItem("auth_token", token);

      navigation.replace("Home");

    } catch (e: any) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 80 }}>

      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Connexion
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
      />

      <Button
        title={loading ? "Connexion..." : "Se connecter"}
        onPress={login}
      />

      <Text
        style={{ marginTop: 15, color: "blue" }}
        onPress={() => navigation.navigate("Register")}
      >
        Pas de compte ? S'inscrire
      </Text>

    </View>
  );
}
