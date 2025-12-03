import { Tabs } from "expo-router";
import { InfoIcon, HouseIcon } from "phosphor-react-native";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor: '#000'},
            tabBarActiveTintColor: 'cyan'
        }}
    
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color}) => <HouseIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({color}) => <InfoIcon color={color} />,
   
        }}
      />
    </Tabs>
  );
}
