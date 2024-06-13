import { Image, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import AntDesign from '@expo/vector-icons/AntDesign';
import { appColors } from "../themes/colors";
import { useState } from "react";
import LoadingData from "./LoadingData";


const UnitPicturesSlider = () => {
    const { specificUnit, specificUnitLoading } = useSelector((state) => state.UnitsSlice)
    const [indexPicture, setIndexPicture] = useState(0)

    const increaseIndexPicture = () => {
        setIndexPicture((prev) => prev < specificUnit.images.length - 1 ? prev += 1 : 0)
    }
    const decreaseIndexPicture = () => {
        setIndexPicture((prev) => prev > 0 ? prev -= 1 : 0)
    }
    return (
        <View className={`w-full h-72 relative`}>
            <TouchableOpacity className={` absolute top-1/2 -translate-y-4 left-5 z-10`} onPress={decreaseIndexPicture}>
                <AntDesign name="leftcircle" size={32} color={appColors.blackColor} />
            </TouchableOpacity>
            {specificUnitLoading ?
                <LoadingData />
                : !specificUnit.images.length > 0
                    ? <View className={`flex-1 items-center justify-center`}><Text className={`text-mainColor font-rubikMedium`}>لا توجد صور لعرضها</Text></View>
                    :
                    <Image
                        source={{ uri: specificUnit?.images[indexPicture] }}
                        alt=""
                        className={`w-full h-full`}
                        resizeMode="contain"
                    />}
            <TouchableOpacity className={` absolute top-1/2 -translate-y-4 right-5`} onPress={increaseIndexPicture}>
                <AntDesign name="rightcircle" size={32} color={appColors.blackColor} />
            </TouchableOpacity>
        </View>
    )
}
export default UnitPicturesSlider