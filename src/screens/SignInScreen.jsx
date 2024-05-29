import { useNavigation } from "@react-navigation/native"
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AuthForms from "../components/AuthForms"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import AuthButton from "../components/AuthButton";
import ThemeMood from "../components/ThemeMood";
import { useSelector } from "react-redux";

const SignInScreen = () => {
    const navigate = useNavigation()
    const { darkMood } = useSelector((state) => state.publicVariablesSlice)

    const [rememberCheck, setRememberCheck] = useState(false)
    return (
        <SafeAreaView className={`flex-1 items-center ${darkMood ? "bg-blackColor" : "bg-whiteColor"} px-4`}>
            <ScrollView>
                <View className={` px-2 mb-0.5 w-full`}>
                    <View className={`flex items-center pt-20 pb-12`}>
                        <Text className={`capitalize text-2xl text-center text-mainColor mb-2`}>Hello And Welcome</Text>
                        <Text className={`capitalize text-base text-center text-gray500`}>Login now by phone number and password or sign up</Text>
                    </View>
                    <AuthForms placeholder={"phone number"} secure={false} />
                    <AuthForms placeholder={"password"} secure={true} />
                    <View className={`flex-row items-center `}>
                        <MaterialCommunityIcons onPress={() => setRememberCheck(!rememberCheck)} name={!rememberCheck ? "checkbox-blank-outline" : "checkbox-marked"} size={24} color="#E2BC2C" />
                        <Text className={`ml-1 text-gray500`}>Remember Me</Text>
                    </View>
                    <View className={`flex items-center my-12`}>
                        <AuthButton title={"Login"} />
                        <Text className={`text-gray400 mt-3`}>forget my password</Text>
                    </View>
                    <View className={`flex-row justify-center items-center`}>
                        <Text className={`text-center text-gray400`}>ـــــــــــــــــــــــــــــــــــــــ</Text>
                        <Text className={`text-center text-gray500`}> or login with </Text>
                        <Text className={`text-center text-gray400`}>ـــــــــــــــــــــــــــــــــــــــ</Text>
                    </View>
                    <TouchableOpacity className={`flex items-center justify-center my-10`}>
                        <Image
                            source={require("../../assets/pictures/google.png")}
                            alt="GOOGLE"
                            className={`w-10 h-10`}
                        />
                    </TouchableOpacity>
                    <Text className={`text-center mb-10 text-gray500 text-base`}>didn't have an account ? new account</Text>
                    <ThemeMood />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignInScreen