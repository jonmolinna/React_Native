import { HomeIcon } from "@/components/Custom/Icons";
import { Screen } from "@/components/Custom/Screen";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <Pressable>
            {({ pressed }) => (
              <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable>
        </Link>

        <Text className="text-white font-bold text-2xl">About</Text>
        <Text className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque
          sit labore, iste est explicabo harum hic minus expedita nulla?
        </Text>
      </ScrollView>
    </Screen>
  );
}
