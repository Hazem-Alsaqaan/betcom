import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen.jsx"
import BookingScreen from "../screens/BookingScreen"
import FavouriteScreen from "../screens/FavouriteScreen"
import ProfileScreen from "../screens/ProfileScreen"
import HeroScreen from "../screens/HeroScreen"
import SignInScreen from "../screens/SignInScreen"
import SignUpScreen from "../screens/SignUpScreen"

const RootStack = createNativeStackNavigator()
const ButtomTab = createBottomTabNavigator()

const currentUser = {
    username: "hazem",
    email: "hazem@gmail.com"
}
const UserLogedInNavigation = () => {
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
        <RootStack.Navigator initialRouteName="hero">
            <RootStack.Screen name="hero" component={HeroScreen} />
            <RootStack.Screen name="sign-in" component={SignInScreen} />
            <RootStack.Screen name="sign-up" component={SignUpScreen} />
        </RootStack.Navigator>
    )
}

const RootNavigation = () => {
    return (
        <NavigationContainer>
            {
                Object.keys(currentUser).length > 0
                    ? <UserLogedInNavigation />
                    : <UserLogedOutNavigation />
            }
        </NavigationContainer>
    )
}

export default RootNavigation