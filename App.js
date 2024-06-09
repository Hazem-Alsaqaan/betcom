import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/navigations/RootNavigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    "rubik-light": require("./assets/fonts/Rubik-Light.ttf"),
    "rubik-regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "rubik-medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "rubik-black": require("./assets/fonts/Rubik-Black.ttf"),
    "rubik-semi-bold": require("./assets/fonts/Rubik-SemiBold.ttf"),
    "rubik-bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "rubik-extra-bold": require("./assets/fonts/Rubik-ExtraBold.ttf"),
  });

  const loadFontsOnLayout = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }
  return (
    <SafeAreaView className={`flex-1 bg-whiteColor`} onLayout={loadFontsOnLayout}>
      <Provider store={store}>
        <PaperProvider>
          <RootNavigation />
          <StatusBar style="auto" />
        </PaperProvider>
      </Provider>
    </SafeAreaView>
  );
}
