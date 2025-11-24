import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View
} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from '../components/Main';
import '../global.css';

export default function HomeScreen() {

  return (
    <SafeAreaProvider>
    <View style={styles.constainer}>
      <StatusBar style="light" />
        <Main />
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "#09f",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12
  },
});
