import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getPosts, POST } from "../../lib/metacritic";
import { AnimatedPostCard } from "./PostCard";

export function Main() {
  const [posts, setPosts] = useState<POST[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
       

      {posts.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(post) => post.id.toString()}
          renderItem={({ item, index }) => <AnimatedPostCard post={item} index={index} />}
        />
      )}
    </View>
  );
}

// ScrollView --> solo usa cuando tu pagina es dinamico como formulario
{
  /* <ScrollView>
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </ScrollView> */
}
