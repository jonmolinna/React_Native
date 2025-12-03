import { AnimatedUserCard } from "@/components/Custom/UserCard";
import { getUsers, USER } from "@/lib/user";
import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import "@/global.css";
import { AboutIcon } from "@/components/Custom/Icons";
import { Screen } from "@/components/Custom/Screen";

const App = () => {
  const [users, setUsers] = useState<USER[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <Screen>
      {users.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item, index }) => (
            <AnimatedUserCard user={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
};

export default App;
