import { View, Text, Image, TouchableOpacity } from "react-native";
import CustomButton from "./CustomButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { appColors } from "../themes/colors";
import { useState } from "react";

const SingleCard = () => {
    const [favourite, setFavourite] = useState(false)
    return (
        <View className={`z-0 border-2 border-solid border-gray300 rounded-xl my-2 overflow-hidden`}>
            {/* IMAGE BOX COMPONENT */}
            <View className={`w-full h-52 bg-lightColor relative`}>
                <TouchableOpacity className={`absolute right-0 top-2 w-10 h-10 z-10`} onPress={()=>setFavourite((prev)=>!prev)}>
                <Ionicons name="heart" size={24} color={favourite ? appColors.mainColor : appColors.whiteColor}/>
                </TouchableOpacity>
                <Image
                    source={{
                        uri: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?t=st=1717921927~exp=1717925527~hmac=159f8e9f4510bad14f753cf54a289a52912778a64e3b7f4c65ee238f44e466c5&w=826",
                    }}
                    alt="UNIT PICTURE"
                    className={`w-full h-full`}
                />
            </View>
            {/* CONTENT BOX COMPONENT */}
            <View className={`p-2 flex gap-1`}>
                <Text className={`text-center font-rubikSemiBold text-mainColor text-xl mb-1`}>إيجار</Text>
                <Text className={`font-rubikMedium`}>شقة تحتوى على 5 غرف و 2 حمام</Text>
                <Text className={`font-rubikMedium`}>المساحة : 150 م</Text>
                <Text className={` font-rubikBold text-mainColor`}>السعر/ 500</Text>
                <View className={`flex-row items-center justify-end gap-1`}>
                    <Text className={`font-rubikMedium`}>4.1</Text>
                    <Ionicons name="star" size={20} color={appColors.mainColor} />
                </View>
                <View className={`flex-row items-end justify-end`}>
                    <Text className={`font-rubikMedium`}>
                        شارع النهضة المتفرع من شارع عزيز عثمان
                    </Text>
                    <Ionicons name="location" size={24} color={appColors.blackColor} style={{ marginRight: -1 }} />
                </View>
                <CustomButton title={"معاينة"} />
            </View>
        </View>
    );
};

export default SingleCard;
