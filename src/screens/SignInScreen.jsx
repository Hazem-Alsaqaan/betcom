import { useNavigation } from "@react-navigation/native"
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AuthForms from "../components/AuthForms"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import AuthButton from "../components/AuthButton";
import ThemeMood from "../components/ThemeMood";
import { useDispatch, useSelector } from "react-redux";
import ChangeLanguage from "../components/ChangeLanguage";
import { userLoginWithPhone } from "../redux/actions/authActions";
import Toast from "react-native-toast-message";
import { toastConfig } from "../utils/configToastStyle";
import { appColors } from "../themes/colors"
const SignInScreen = () => {
    const dispatch = useDispatch()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigation()
    const [rememberCheck, setRememberCheck] = useState(false)
    const { loadingCurrentUser } = useSelector((state) => state.AuthSlice)
    const { darkMood, english } = useSelector((state) => state.publicVariablesSlice)

    // HANDLE LOGIN WITH PHONE AND PASSWORD
    const loginWithPhoneAndPassword = () => {
        dispatch(userLoginWithPhone({ phone: `+2${phone}`, password: password }))
    }
    return (
        <SafeAreaView className={`flex-1 px-4 ${darkMood ? "bg-blackColor" : "bg-whiteColor"}`}>
            <ScrollView >
                <View className={`flex items-center pt-12 pb-8 `}>
                    <Text className={`capitalize text-2xl text-center text-mainColor mb-2 font-rubikSemiBold`}>{english ? "Hello And Welcome" : "أهلا بــك"}</Text>
                    <Text className={`capitalize text-base text-center text-gray500 font-rubikSemiBold`}>{english ? "Login now by phone number and password or sign up" : "سجل الدخول برقم الهاتف وكلمة المرور أو قم بانشاء حساب"}</Text>
                </View>
                <AuthForms placeholder={english ? "phone number" : "رقم الهاتف"} secure={false} value={phone} setValue={setPhone} />
                <AuthForms placeholder={english ? "password" : "كلمة المرور"} secure={true} value={password} setValue={setPassword} />
                <View className={`flex-row items-center ${english ? "justify-start" : "justify-end"} mx-3`}>
                    <MaterialCommunityIcons onPress={() => setRememberCheck(!rememberCheck)} name={!rememberCheck ? "checkbox-blank-outline" : "checkbox-marked"} size={24} color={appColors.mainColor} />
                    <Text className={`text-gray500 font-rubikSemiBold`}>{english ? "Remember Me" : "تذكرني"}</Text>
                </View>
                <View className={`flex items-center my-8`}>
                    <AuthButton title={english ? "Login" : "تسجيل الدخول"} handleClick={loginWithPhoneAndPassword} loading={loadingCurrentUser} />
                    <Text className={`text-gray400 mt-3 font-rubikSemiBold`}>{english ? "forget my password" : "نسيت كلمة المرور"}</Text>
                </View>
                <View className={`flex-row justify-center items-center`}>
                    <Text className={`text-center text-gray400`}>ـــــــــــــــــــــــــــــــــــــــ</Text>
                    <Text className={`text-center text-gray500 font-rubikSemiBold`}> {english ? "or login with" : "أو سجل الدخول باستخدام"} </Text>
                    <Text className={`text-center text-gray400`}>ـــــــــــــــــــــــــــــــــــــــ</Text>
                </View>
                <TouchableOpacity className={`flex items-center justify-center my-10`}>
                    <Image
                        source={require("../../assets/pictures/google.png")}
                        alt="GOOGLE"
                        className={`w-10 h-10`}
                    />
                </TouchableOpacity>
                <View className={`flex-row items-center justify-center`} >
                    <Text className={`text-center mb-5 text-gray500 text-base font-rubikSemiBold`}>{english ? "didn't have an account ? " : "ليس لدي حساب ؟ "}
                        <Text onPress={() => navigate.navigate("sign-up")} className={`text-center mb-5 font-rubikSemiBold text-mainColor`}>{english ? "create account" : "إنشاء حساب"}</Text>
                    </Text>
                </View>
                <View className={`flex-row items-center justify-around`}>
                    <ThemeMood />
                    <ChangeLanguage />
                </View>
            </ScrollView>
            <Toast config={toastConfig} />
        </SafeAreaView>
    )
}

export default SignInScreen