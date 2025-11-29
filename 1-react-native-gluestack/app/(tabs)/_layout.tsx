import { Tabs, useRouter } from 'expo-router';
import {HouseIcon, MagnifyingGlassIcon, HeartIcon, UserIcon, PlusSquareIcon, RabbitIcon} from 'phosphor-react-native'

export default function TabLayout() {
  const router = useRouter()


  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => {
            return <HouseIcon weight={focused ? "fill" : "regular"} color={color} size={24} />
          }
        }}
      />

       <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({color, focused}) => {
            return <MagnifyingGlassIcon weight={focused ? "fill" : "regular"} color={color} size={24} />
          }
        }}
      />

      <Tabs.Screen
        name="empty"
        options={{
          title: 'Post',
          tabBarIcon: ({color, focused}) => {
            return <PlusSquareIcon weight={focused ? "fill" : "regular"} color={color} size={24} />
          }
        }}
        listeners={{
          tabPress: (e) => {
            console.log("YOOO -> ", e)
            router.push('/(tabs)/empty')
          }
        }}
      />

       <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({color, focused}) => {
            return <HeartIcon weight={focused ? "fill" : "regular"} color={color} size={24} />
          }
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color, focused}) => {
            return <UserIcon weight={focused ? "fill" : "regular"} color={color} size={24} />
          }
        }}
      />

    </Tabs>
  );
}
