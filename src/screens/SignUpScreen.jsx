import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import AuthForms from "../components/AuthForms"
import ThemeMood from "../components/ThemeMood"
import ChangeLanguage from "../components/ChangeLanguage"
import { useSelector } from "react-redux"
import AuthButton from "../components/AuthButton"

const SignUpScreen = () => {
    const navigate = useNavigation()
    const { darkMood, english } = useSelector((state) => state.publicVariablesSlice)
    return (
        <SafeAreaView className={`flex-1 px-4 ${darkMood ? "bg-blackColor" : "bg-whiteColor"}`}>
            <ScrollView >
                <View className={`flex items-center pt-12 pb-8 `}>
                    <Text className={`capitalize text-2xl text-center text-mainColor mb-2 font-rubikSemiBold`}>{english ? "Hello And Welcome" : "أهلا بــك"}</Text>
                    <Text className={`capitalize text-base text-center text-gray500 font-rubikSemiBold`}>{english ? "sign up by phone number and password or Login" : "قم بانشاء حساب برقم الهاتف وكلمة المرور أو سجل الدخول"}</Text>
                </View>
                <AuthForms placeholder={english ? "username" : "الاسم"} secure={false} />
                <AuthForms placeholder={english ? "phone number" : "رقم الهاتف"} secure={false} />
                <AuthForms placeholder={english ? "password" : "كلمة المرور"} secure={true} />
                <AuthForms placeholder={english ? "confirm password" : "تأكيد كلمة المرور"} secure={true} />
                <View className={`flex items-center my-8`}>
                    <AuthButton title={english ? "Sign Up" : "إنشاء حساب"} />
                </View>
                <View className={`flex-row justify-center items-center`}>
                    <Text className={`text-center text-gray400`}>ـــــــــــــــــــــــــــــــــــــــ</Text>
                    <Text className={`text-center text-gray500 font-rubikSemiBold`}> {english ? "Or Sign Up With" : "أو قم بانشاء حساب باستخدام"} </Text>
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
                    <Text className={`text-center mb-5 text-gray500 text-base font-rubikSemiBold`}>{english ? "I have already account ? " : "لدي حساب بالفعل ؟ "}
                        <Text onPress={() => navigate.navigate("sign-in")} className={`text-center mb-5 font-rubikSemiBold text-mainColor`}>{english ? "login" : "تسجيل الدخول"}</Text>
                    </Text>
                </View>
                <View className={`flex-row items-center justify-around`}>
                    <ThemeMood />
                    <ChangeLanguage />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUpScreen