import { Tabs } from "expo-router";
import {
    BookmarkIcon,
    HouseIcon,
    Icon,
    PlusSquareIcon,
    UserIcon,
} from "phosphor-react-native";
import { Text, View } from "react-native";

type TabIconProps = {
  icon: Icon;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon: Icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2  ">
      <Icon size={24} color={color} weight={focused ? "fill" : "regular"} />
      <Text className={`${focused ? "font-medium" : "font-normal"} text-xs`}
        style={{color: color}}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#ffa001',
          tabBarInactiveTintColor: '#cdcde0',
          tabBarItemStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
             tabBarIconStyle: {

            },
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={HouseIcon}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIconStyle: {
                width: '100%',
            },
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={BookmarkIcon}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIconStyle: {
                width: '100%',
            },
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={PlusSquareIcon}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIconStyle: {
                width: '100%',
            },
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={UserIcon}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
