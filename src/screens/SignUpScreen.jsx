import { useNavigation } from "@react-navigation/native"
import { Text, View } from "react-native"

const SignUpScreen = () => {
    const navigate = useNavigation()
    const goToHeroScreen = () => {
        navigate.navigate("hero")
    }
    return (
        <View className={`flex-1 items-center justify-center`}>
            <Text>SignUp Screen</Text>
            <Text onPress={() => goToHeroScreen()} className={`m-4 text-base text-center text-slate-700`}>Go To Hero</Text>
        </View>
    )
}

export default SignUpScreen