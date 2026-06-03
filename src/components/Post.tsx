import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Comment = {
  id: string;
  text: string;
  date: string;
};

export default function Post({ id }: { id: string }) {

  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");

  const key = `comments-${id}`;

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const stored = await AsyncStorage.getItem(key);
    if (stored) setComments(JSON.parse(stored));
  };

  const save = async (data: Comment[]) => {
    setComments(data);
    await AsyncStorage.setItem(key, JSON.stringify(data));
  };

  const add = async () => {
    if (!text.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      text,
      date: new Date().toLocaleString(),
    };

    await save([newComment, ...comments]);
    setText("");
  };

  return (
    <View style={{ marginTop: 30 }}>

      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        💬 Commentaires
      </Text>

      {/* INPUT */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Écrire un commentaire"
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ddd",
            padding: 10,
            borderRadius: 8,
          }}
        />

        <Pressable
          onPress={add}
          style={{
            backgroundColor: "#6d28d9",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white" }}>OK</Text>
        </Pressable>
      </View>

      {/* LIST */}
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 15 }}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#eee",
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text>{item.text}</Text>
            <Text style={{ fontSize: 10, color: "gray" }}>
              {item.date}
            </Text>
          </View>
        )}
      />

    </View>
  );
}
