import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getToken() {
  return await AsyncStorage.getItem("auth_token");
}

export async function setToken(token: string) {
  await AsyncStorage.setItem("auth_token", token);
}

export async function logout() {
  await AsyncStorage.removeItem("auth_token");
}
