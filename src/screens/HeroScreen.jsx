import { useNavigation } from "@react-navigation/native"
import { Text, View, TouchableOpacity } from "react-native"

const HeroScreen = () => {
    const navigate = useNavigation()
    // FUNCTION HANDLE USER SIGN-IN
    const signinHandler = () => {
        navigate.navigate("sign-in")
    }
    // FUNCTION HANDLE USER SIGN-UP
    const signupHandler = () => {
        navigate.navigate("sign-up")
    }
    return (
        <View className={`flex-1 items-center justify-center`}>
            <Text>Hero Screen</Text>
            <TouchableOpacity
                onPress={() => signinHandler()}
                className={`w-32  px-5 py-2 rounded-xl bg-mainColor m-0.5`}>
                <Text className={`text-xl text-center`}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => signupHandler()}
                className={`w-32  px-5 py-2 rounded-xl bg-mainColor m-0.5`}>
                <Text className={`text-xl text-center`}>Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeroScreen