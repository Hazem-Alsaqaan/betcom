import "dotenv/config.js";
export default {
  expo: {
    name: "betcom",
    slug: "betcom",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/betcom-icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash.jpg",
      resizeMode: "cover",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_MAP_API_KEY,
        },
      },
      package: "com.hazemalsaqaan.betcom",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "6cb8a24e-7c6a-4da3-ab0d-5508f821f1d8",
      },
    },
    owner: "hazem-alsaqaan",
    plugins: ["expo-localization", "expo-font"],
  },
};
