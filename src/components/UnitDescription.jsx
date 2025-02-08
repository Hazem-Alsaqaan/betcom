import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import AntDesign from "@expo/vector-icons/AntDesign";
import { appColors } from "../themes/colors";
import CustomButton from "./CustomButton";
import { I18nManager } from "react-native";

const UnitDescription = () => {
  const { specificUnit } = useSelector((state) => state.UnitsSlice);
  return (
    <View className={`flex-1 p-4 pb-10 bg-gray50 `}>
      <ScrollView showsVerticalScrollIndicator={false} className={`flex-1`}>
        <View
          className={`flex-row items-center justify-center gap-1 py-2 rounded my-4 bg-gray100`}
        >
          <Text className={`font-rubikMedium text-xs text-gray500`}>
            هذه المعلومات مقدمة من المالك وليست من التطبيق
          </Text>
          <AntDesign name="checkcircle" size={16} color={appColors.mainColor} />
        </View>
        <View className={`flex justify-center items-center`}>
          <Text className={`font-rubikMedium`}>{`شقة تمليك`}</Text>
        </View>
        <View
          className={`flex justify-center  ${
            I18nManager.isRTL ? "items-start" : "items-end"
          } gap-2 px-2`}
        >
          <Text className={` font-rubikMedium mx-1`}>
            {`السعر ${specificUnit?.price}`}
          </Text>
          <Text
            className={` font-rubikRegular mx-1`}
          >{`بمساحة ${specificUnit?.apartment_area} متر`}</Text>
          <Text className={` font-rubikRegular mx-1`}>
            {`${specificUnit?.city} ${specificUnit?.street}`}{" "}
            {/* <Ionicons name="location" size={18} color={appColors.blackColor} /> */}
          </Text>
        </View>
        <View
          className={`flex items-center bg-gray100 p-3 rounded-lg my-4 h-32`}
        >
          <Text
            className={`font-rubikMedium text- text-blackColor text-center`}
          >
            الوصف :
          </Text>
          <Text className={`font-rubikRegular text-sm text-blackColor`}>
            {specificUnit?.description}
          </Text>
        </View>
      </ScrollView>
      <View className={`w-full flex justify-center items-center`}>
        <CustomButton title={"اتصل الآن"} />
        <Text>01017997927</Text>
      </View>
    </View>
  );
};
export default UnitDescription;
