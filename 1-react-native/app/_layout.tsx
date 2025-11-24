import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    })

    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) SplashScreen.hideAsync();

    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return (
        
    <GluestackUIProvider mode="dark">
      <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }}
            />
        </Stack>
    </GluestackUIProvider>
  
    )
}

export default RootLayout;