import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View className={`flex-1 items-center justify-center bg-mainColor`}>
        <Text className={`text-3xl text-secondColor`}>Betcom app</Text>
      </View>
      <StatusBar style="auto" />
    </>
  );
}
