import { HomeIcon } from "@/components/Custom/Icons";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

export default function About() {
  return (
    <ScrollView className="pt-24">
      <Link asChild href="/">
        <Pressable>
          {
            ({pressed}) => <HomeIcon style={{opacity: pressed ? 0.5 : 1}} />
          }
        </Pressable>
      </Link>

      <Text className="text-gray-900 font-bold text-2xl">About</Text>
      <Text className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque sit
        labore, iste est explicabo harum hic minus expedita nulla?
      </Text>
    </ScrollView>
  );
}


// DATO CURIOSO
// ---------------------
// import {styled} from 'nativewind'
// const StyledPressable = styled(Pressable)

{/* <Link>
  <StyledPressable className={`active:opacity-50`}>
    <HomeIcon />
  </StyledPressable>
</Link> */}