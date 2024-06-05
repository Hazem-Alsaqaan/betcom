import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignInScreen from "../screens/SignInScreen"
import SignUpScreen from "../screens/SignUpScreen"
import { useSelector } from "react-redux"
import InSideAppNavigation from "./InSideAppNavigation"

const RootStack = createNativeStackNavigator()



const UserLogedOutNavigation = () => {
    return (
        <RootStack.Navigator initialRouteName="sign-in">
            <RootStack.Screen name="sign-in" component={SignInScreen} options={{ headerShown: false }} />
            <RootStack.Screen name="sign-up" component={SignUpScreen} options={{ headerShown: false }} />
        </RootStack.Navigator>
    )
}

const RootNavigation = () => {
    const { currentUser } = useSelector((state) => state.AuthSlice)
    return (
        <>
            <NavigationContainer>
                {
                    Object.keys(currentUser).length <= 0
                        ?
                        <UserLogedOutNavigation />
                        :
                        <InSideAppNavigation />
                }
            </NavigationContainer>
        </>
    )
}

export default RootNavigation