import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen.jsx"
import BookingScreen from "../screens/BookingScreen"
import FavouriteScreen from "../screens/FavouriteScreen"
import ProfileScreen from "../screens/ProfileScreen"
import SignInScreen from "../screens/SignInScreen"
import SignUpScreen from "../screens/SignUpScreen"
import { useSelector } from "react-redux"

const RootStack = createNativeStackNavigator()
const ButtomTab = createBottomTabNavigator()

const InSideAppNavigation = () => {
    return (
        <ButtomTab.Navigator>
            <ButtomTab.Screen name="home" component={HomeScreen} />
            <ButtomTab.Screen name="booking" component={BookingScreen} />
            <ButtomTab.Screen name="favourite" component={FavouriteScreen} />
            <ButtomTab.Screen name="profile" component={ProfileScreen} />
        </ButtomTab.Navigator>
    )
}

const UserLogedOutNavigation = () => {
    return (
        <RootStack.Navigator initialRouteName="sign-in">
            <RootStack.Screen name="sign-in" component={SignInScreen} options={{ headerShown: false }} />
            <RootStack.Screen name="sign-up" component={SignUpScreen} />
        </RootStack.Navigator>
    )
}

const RootNavigation = () => {
    const { currentUser } = useSelector((state) => state.AuthSlice)
    return (
        <NavigationContainer>
            {
                !currentUser?.id
                    ?
                    <UserLogedOutNavigation />
                    :
                    <InSideAppNavigation />
            }
        </NavigationContainer>
    )
}

export default RootNavigation