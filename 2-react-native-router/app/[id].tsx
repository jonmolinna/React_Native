import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "@/components/Custom/Screen";

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "#fff",
          headerLeft: () => null,
          headerTitle: 'Detalle de usuario',
          headerRight: () => null
        }}
      />

      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del usuario {id}
        </Text>
        <Link href="/" className="text-blue-500">
          Volver atrás
        </Link>
      </View>
    </Screen>
  );
}
