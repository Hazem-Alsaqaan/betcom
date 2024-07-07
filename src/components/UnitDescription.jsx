
import { ScrollView, Text, View } from "react-native"
import { useSelector } from "react-redux"
import AntDesign from '@expo/vector-icons/AntDesign';
import { appColors } from "../themes/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "./CustomButton";



const UnitDescription = () => {
    const { specificUnit } = useSelector((state) => state.UnitsSlice)
    return (
        <View className={`flex-1 p-4 pb-10 bg-gray50 `}>
            <ScrollView showsVerticalScrollIndicator={false} className={`flex-1`}>
                <View className={`flex-row items-center justify-center gap-1 py-2 rounded my-4 bg-gray100`}>
                    <Text className={`font-rubikMedium text-xs text-gray500`}>هذه المعلومات مقدمة من المالك وليست من التطبيق</Text>
                    <AntDesign name="checkcircle" size={16} color={appColors.mainColor} />
                </View>
                <View className={`flex justify-center gap-2 px-2`}>
                    <View className={`flex justify-center items-center`}>
                        <Text className={`font-rubikMedium`}>{`شقة تمليك`}</Text>
                    </View>
                    <View className={`flex-row items-center justify-end`}>
                        <Text className={` font-rubikMedium mx-1`}>{specificUnit?.price}</Text>
                        <Text className={` font-rubikRegular`}>{`• السعر`}</Text>
                    </View>
                    <View className={`flex-row items-center justify-end `}>
                        <Text className={` font-rubikRegular mx-1`}>{`${specificUnit?.city} ${specificUnit?.street}`}</Text>
                        <Ionicons name="location" size={18} color={appColors.blackColor} style={{ marginRight: -2 }} />
                    </View>
                    <View className={`flex-row items-center justify-end `}>
                        <Text className={` font-rubikRegular mx-1`}>{`بمساحة ${specificUnit?.apartment_area} متر`}</Text>
                        <AntDesign name="areachart" size={18} color="black" />
                    </View>
                </View>
                <View className={`flex items-end bg-gray100 p-3 rounded-lg my-4 h-32`}>
                    <Text className={`font-rubikMedium text- text-backColor`}>الوصف :</Text>
                    <Text className={`font-rubikRegular text-sm text-backColor`}>{specificUnit?.description}</Text>
                </View>
            </ScrollView>
            <View className={`w-full flex justify-center items-center`}>
                <CustomButton title={"اتصل الآن"} />
                <Text>01017997927</Text>
            </View>
        </View>
    )
}
export default UnitDescription