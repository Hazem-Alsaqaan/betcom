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
        setIndexPicture((prev) => prev < specificUnit?.images?.length - 1 ? prev += 1 : 0)
    }
    const decreaseIndexPicture = () => {
        setIndexPicture((prev) => prev > 0 ? prev -= 1 : 0)
    }
    const picURL = specificUnit?.images[indexPicture]
    return (
        <View className={`w-full h-64 relative`}>
            <TouchableOpacity className={` absolute top-1/2 -translate-y-4 left-5 z-10`} onPress={()=>decreaseIndexPicture()}>
                <AntDesign name="leftcircle" size={32} color={appColors.blackColor} />
            </TouchableOpacity>
            {specificUnitLoading ?
                <LoadingData />
                : 
                    <Image
                        // source={{ uri:"https://img.freepik.com/free-photo/low-angle-shot-modern-design-building-with-huge-ferris-wheel-bluewaters-island-dubai_181624-25722.jpg?t=st=1718305913~exp=1718309513~hmac=3f65f6ffca09dc35649ccc28a2b4919f6e5aa007037503bbcabfe9a6d16dca15&w=826" }}
                        source={{ uri: `${picURL}` }}
                        alt=""
                        className={`w-full h-full`}
                        resizeMode="contain"
                    />
                    }
            <TouchableOpacity className={` absolute top-1/2 -translate-y-4 right-5`} onPress={()=>increaseIndexPicture()}>
                <AntDesign name="rightcircle" size={32} color={appColors.blackColor} />
            </TouchableOpacity>
        </View>
    )
}
export default UnitPicturesSlider