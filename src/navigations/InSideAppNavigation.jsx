import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen.jsx";
import MyUnitsScreen from "../screens/MyUnitsScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { appColors } from "../themes/colors.js";
import { Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import EnterYourUnitsData from "../screens/EnterYourUnitsData.jsx";

const ButtomTab = createBottomTabNavigator();
const InSideAppNavigation = () => {
  const { english } = useSelector((state) => state.publicVariablesSlice);
  return (
    <ButtomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingBottom: 12,
          paddingTop: 5,
          paddingHorizontal: 5,
          backgroundColor: "white",
        },
      }}
    >
      <ButtomTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          // headerTitle: english ? "betcom" : "بيتكم",
          // headerTitleAlign: "center",
          // headerTitleStyle: { fontWeight: "bold", color: appColors.mainColor },
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              className={` font-rubikMedium text-xs ${
                focused ? "text-mainColor" : "text-gray500"
              }`}
            >
              {english ? "home" : "الرئيسية"}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={28}
              color={focused ? appColors.mainColor : appColors.gray400}
            />
          ),
        }}
      />
      <ButtomTab.Screen
        name="my-units"
        component={MyUnitsScreen}
        options={{
          headerTitle: english ? "my units" : "وحداتي",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: appColors.mainColor,
            fontFamily: "rubik-semi-bold",
          },
          tabBarLabel: ({ focused }) => (
            <Text
              className={` font-rubikMedium text-xs ${
                focused ? "text-mainColor" : "text-gray500"
              }`}
            >
              {english ? "my units" : "وحداتي"}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="bookmark-multiple"
              size={28}
              color={focused ? appColors.mainColor : appColors.gray400}
            />
          ),
        }}
      />
      <ButtomTab.Screen
        name="show-your-unit"
        component={EnterYourUnitsData}
        options={{
          headerTitle: english ? "show your unit" : "اعرض وحدتك",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: appColors.mainColor,
            fontFamily: "rubik-semi-bold",
          },
          tabBarLabel: ({ focused }) => (
            <Text
              className={` font-rubikMedium text-xs ${
                focused ? "text-mainColor" : "text-gray500"
              }`}
            >
              {english ? "push unit" : "اعرض وحدتك"}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="building"
              size={28}
              color={focused ? appColors.mainColor : appColors.gray400}
            />
          ),
        }}
      />
      <ButtomTab.Screen
        name="favourite"
        component={FavouriteScreen}
        options={{
          headerTitle: english ? "favourite" : "مفضلتي",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: appColors.mainColor,
            fontFamily: "rubik-semi-bold",
          },

          tabBarLabel: ({ focused }) => (
            <Text
              className={` font-rubikMedium text-xs ${
                focused ? "text-mainColor" : "text-gray500"
              }`}
            >
              {english ? "favourite" : "مفضلتي"}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={28}
              color={focused ? appColors.mainColor : appColors.gray400}
            />
          ),
        }}
      />
      <ButtomTab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerTitle: english ? "profile" : "حسابي",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: appColors.mainColor,
            fontFamily: "rubik-semi-bold",
          },

          tabBarLabel: ({ focused }) => (
            <Text
              className={`font-rubikMedium text-xs text-center ${
                focused ? "text-mainColor" : "text-gray500"
              }`}
            >
              {english ? "profile" : "حسابي"}
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name="circle-user"
              size={28}
              color={focused ? appColors.mainColor : appColors.gray400}
            />
          ),
        }}
      />
    </ButtomTab.Navigator>
  );
};
export default InSideAppNavigation;
