import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

export default function App() {
    console.log("yooooo ---> ", images.logo)
    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className='w-full justify-center items-center h-full px-4'>
                    <Image source={require(images.logo)} className='w-[130px] h-[84px]' resizeMode='contain'/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

// 57-54