import { View, Text, Image, TouchableOpacity } from "react-native";
import CustomButton from "./CustomButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { appColors } from "../themes/colors";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SingleCard = ({ item }) => {
    const navigation = useNavigation()
    const [favourite, setFavourite] = useState(false)
    const viewSpecificUnit = () => {
        navigation.setParams({ unitId: item._id })
        navigation.navigate("unit-tabs", {unitId: item._id}
        )
    }
    return (
        <View className={`z-0 border-2 border-solid border-gray300 rounded-xl my-2 overflow-hidden`}>
            {/* IMAGE BOX COMPONENT */}
            <View className={`w-full h-52 bg-lightColor relative`}>
                <TouchableOpacity className={`absolute right-0 top-2 w-10 h-10 z-10`} onPress={() => setFavourite((prev) => !prev)}>
                    <Ionicons name="heart" size={24} color={favourite ? appColors.mainColor : appColors.whiteColor} />
                </TouchableOpacity>
                <Image
                    source={{
                        uri: item?.images[0],
                    }}
                    alt="UNIT PICTURE"
                    className={`w-full h-full`}
                />
            </View>
            {/* CONTENT BOX COMPONENT */}
            <View className={`flex items-end gap-1 p-2`}>
                <Text className={`text-center font-rubikSemiBold text-mainColor text-xl mb-1 w-full`}>إيجار</Text>
                <Text className={`font-rubikMedium`}>شقة تحتوى على {item?.rooms} غرف و {item?.bathrooms} حمام</Text>
                <Text className={`font-rubikMedium`}>المساحة : {item?.apartment_area} م</Text>
                <Text className={` font-rubikBold text-mainColor`}>السعر/ {item?.price}</Text>
                <View className={`flex-row items-center justify-end gap-1`}>
                    <Text className={`font-rubikMedium`}>{item?.rating}</Text>
                    <Ionicons name="star" size={20} color={appColors.mainColor} />
                </View>
                <View className={`flex-row items-end justify-end`}>
                    <Text className={`font-rubikMedium`}>{`${item?.city} ${item?.street}`}</Text>
                    <Ionicons name="location" size={24} color={appColors.blackColor} style={{ marginRight: -2 }} />
                </View>
                <View className={`w-full`}>
                    <CustomButton title={"معاينة"} handlePress={viewSpecificUnit} />
                </View>
            </View>
        </View>
    );
};

export default SingleCard;
