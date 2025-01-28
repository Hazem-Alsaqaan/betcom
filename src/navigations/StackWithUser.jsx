import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InSideAppNavigation from "./InSideAppNavigation";
import { appColors } from "../themes/colors";
import ContainerUnitTaps from "../screens/containerUnitTabs/ContainerUnitTaps";

const Stack = createNativeStackNavigator();

const StackWithUser = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="root-tabs"
        component={InSideAppNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="unit-tabs"
        component={ContainerUnitTaps}
        options={{
          headerTitle: "بيتكم",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "rubik-semi-bold",
            color: appColors.mainColor,
          },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackWithUser;
