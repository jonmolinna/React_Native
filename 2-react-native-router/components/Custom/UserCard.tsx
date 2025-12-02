import { USER } from "@/lib/user";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Pressable } from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";

export function UserCard({ user }: { user: USER }) {
  return (
    <Link href={`/${user.id}`} asChild>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1,
            transform: [{ scale: pressed ? 0.97 : 1 }],
          },
        ]}
      >
        <View key={user.id} className="border border-gray-200 p-4 bg-gray-900">
          <Text className="font-medium text-white text-lg">{user.name}</Text>
          <Text className="text-gray-300 text-base">{user.email}</Text>
          <Score score={user.id} maxScore={100} />
        </View>
      </Pressable>
    </Link>
  );
}

export function AnimatedUserCard({
  user,
  index,
}: {
  user: USER;
  index: number;
}) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <UserCard user={user} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 107,
    height: 107,
    borderRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "fff",
  },
  username: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
  },
});
