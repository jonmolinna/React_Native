import { USER } from "@/lib/user";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

export function UserCard({user}: {user: USER}) {
    return (
        <View key={user.id} style={styles.card}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>{user.email}</Text>
            <Text style={styles.score}>{user.id}</Text>
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
        <Animated.View>
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