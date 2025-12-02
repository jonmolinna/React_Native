import { View } from "react-native";
import { ReactNode } from "react";

export function Screen({children}: {children: ReactNode}) {
    return <View className="flex-1 bg-black pt-4">
        {children}
    </View>
}