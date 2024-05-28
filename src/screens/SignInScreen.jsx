import { useNavigation } from "@react-navigation/native"
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AuthForms from "../components/AuthForms"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import AuthButton from "../components/AuthButton";

const SignInScreen = () => {
    const navigate = useNavigation()
    const [rememberCheck, setRememberCheck] = useState(false)
    return (
        <SafeAreaView className={`flex-1 items-center  bg-white px-4`}>
            <ScrollView>
                <View className={`bg-white px-2 mb-0.5 w-full`}>
                    <View className={`flex items-center pt-24 pb-12`}>
                        <Text className={`capitalize text-2xl text-center text-mainColor mb-2`}>Hello And Welcome</Text>
                        <Text className={`capitalize text-base text-center text-slate-500`}>Login now by phone number and password or sign up</Text>
                    </View>
                    <AuthForms placeholder={"phone number"} secure={false} />
                    <AuthForms placeholder={"password"} secure={true} />
                    <View className={`flex-row items-center `}>
                        <MaterialCommunityIcons onPress={() => setRememberCheck(!rememberCheck)} name={!rememberCheck ? "checkbox-blank-outline" : "checkbox-marked"} size={24} color="#E2BC2C" />
                        <Text className={`ml-1`}>Remember Me</Text>
                    </View>
                    <View className={`flex items-center my-12`}>
                        <AuthButton title={"Login"} />
                        <Text className={`text-slate-400 mt-3`}>forget my password</Text>
                    </View>
                    <View className={`flex-row justify-center items-center`}>
                        <Text className={`text-center text-slate-400`}>ـــــــــــــــــــــــــــــــــــــــ</Text>
                        <Text className={`text-center text-slate-500`}> or login with </Text>
                        <Text className={`text-center text-slate-400`}>ـــــــــــــــــــــــــــــــــــــــ</Text>
                    </View>
                    <TouchableOpacity className={`flex items-center justify-center my-10`}>
                        <Image
                            source={require("../../assets/pictures/google.png")}
                            alt="GOOGLE"
                            className={`w-10 h-10`}
                        />
                    </TouchableOpacity>
                    <Text className={`text-center mb-10 text-slate-500 text-base`}>didn't have an account ? new account</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignInScreen