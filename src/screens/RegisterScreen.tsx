import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { BilletService } from "../services/billetService";

export default function RegisterScreen({ navigation }: any) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await BilletService.register(name, email, password);

      alert("Compte créé !");

      navigation.navigate("Login");

    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 80 }}>

      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Inscription
      </Text>

      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

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
        title="Créer un compte"
        onPress={register}
      />

    </View>
  );
}
