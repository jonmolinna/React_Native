import { USER } from "@/lib/user";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { Score } from "./Score";

export function UserCard({user}: {user: USER}) {
    return (
        <View key={user.id} className="border border-gray-200 p-4">
            <Text className="font-medium text-gray-900 text-lg">{user.name}</Text>
            <Text className="text-gray-500 text-base">{user.email}</Text>
            <Score score={user.id} maxScore={100} />
        </View>
    )
}


export function AnimatedUserCard({user, index}: {user: USER, index: number}) {
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
    )
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