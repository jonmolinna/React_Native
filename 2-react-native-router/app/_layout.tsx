import { AboutIcon, Logo } from "@/components/Custom/Icons"
import { Link, Slot, Stack } from "expo-router"
import { Pressable, View } from "react-native"

export default function Layout() {
    return (
        <View className="flex-1 bg-white">
            <Stack 
                screenOptions={{
                    headerStyle: {backgroundColor: "black"},
                    headerTintColor: "white",
                    headerTitle: "",
                    headerLeft: () => <Logo />,
                    headerRight: () => (
                        <Link asChild href="/about">
                            <Pressable>
                                <AboutIcon />
                            </Pressable>
                        </Link>
                    ) 
                }}
            
            />
        </View>
    )
}