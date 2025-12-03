import { Link, Stack } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "@/components/Custom/Screen";
import { useEffect, useState } from "react";
import { getUser, USER } from "@/lib/user";
import { Score } from "@/components/Custom/Score";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [user, setUser] = useState<USER | null>(null);

  useEffect(() => {
    if (id && typeof id === "string") {
      getUser(id).then((item) => {
        setUser(item);
      });
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "#fff",
          headerLeft: () => null,
          headerTitle: "Detalle de usuario",
          headerRight: () => null,
        }}
      />
      <View>
        {user === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Score score={user.id} maxScore={100} />
              <Text className="text-white font-bold text-2xl">
                {user.name}
              </Text>
              <Text className="text-gray-300 font-bold text-base">
                {user.email}
              </Text> 
              <Link href="/" className="text-blue-500">
                Volver atrás
              </Link>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
