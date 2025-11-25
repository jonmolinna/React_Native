import { AnimatedUserCard } from "@/components/Custom/UserCard";
import { getUsers, USER } from "@/lib/user";
import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const App = () => {
  const [users, setUsers] = useState<USER[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
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
    </View>
  );
};

export default App;
