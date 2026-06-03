import { View, Text, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Header({ navigation }: any) {

  const logout = async () => {
    await AsyncStorage.removeItem("auth_token");
    navigation.replace("Login");
  };

  return (
    <View
      style={{
        padding: 15,
        paddingTop: 50,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderColor: "#eee",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        {/* Logo */}
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#6d28d9" }}>
          B2LP
        </Text>

        {/* Actions */}
        <View style={{ flexDirection: "row", gap: 10 }}>

          <Pressable
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "#6d28d9" }}>Home</Text>
          </Pressable>

          <Pressable onPress={logout}>
            <Text style={{ color: "red" }}>Logout</Text>
          </Pressable>

        </View>

      </View>

    </View>
  );
}
