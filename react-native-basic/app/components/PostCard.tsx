import { POST } from "@/lib/metacritic";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

interface PostCardProps {
  post: POST;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <View key={post.id} style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.description}>{post.body}</Text>
      <Text style={styles.score}>{post.id}</Text>
    </View>
  );
}

export function AnimatedPostCard({
  post,
  index,
}: {
  post: POST;
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
    <Animated.View>
      <PostCard post={post} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  image: {
    width: 107,
    height: 107,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "fff",
  },
  description: {
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
