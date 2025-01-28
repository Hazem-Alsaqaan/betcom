import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UnitLocation from "../../components/UnitLocation";
import UnitDescription from "../../components/UnitDescription";
import { appColors } from "../../themes/colors";

const TopTab = createMaterialTopTabNavigator();

export const TopTabNavigation = () => {
  return (
    <TopTab.Navigator
      initialRouteName="unit-description"
      screenOptions={{
        tabBarLabelStyle: { fontFamily: "rubik-semi-bold" },
        tabBarActiveTintColor: appColors.mainColor,
        tabBarInactiveTintColor: appColors.blackColor,
      }}
    >
      <TopTab.Screen
        name="unit-description"
        component={UnitDescription}
        options={{
          tabBarLabel: "التفاصيل",
        }}
      />
      <TopTab.Screen
        name="unit-location"
        component={UnitLocation}
        options={{
          tabBarLabel: "الموقع",
        }}
      />
    </TopTab.Navigator>
  );
};
