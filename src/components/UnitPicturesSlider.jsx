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
    // const picURL = specificUnit?.images[indexPicture]
    return (
        <View className={`w-full h-64 relative`}>
            <TouchableOpacity className={` absolute top-1/2 -translate-y-4 left-5 z-10`} onPress={() => decreaseIndexPicture()}>
                <AntDesign name="leftcircle" size={32} color={appColors.blackColor} />
            </TouchableOpacity>
            {specificUnitLoading ?
                <LoadingData />
                :
                <Image
                    source={{
                        uri: `${Object.keys(specificUnit).length <= 0 ?
                            "https://img.freepik.com/free-photo/grungy-white-background-natural-cement-stone-old-texture-as-retro-pattern-wall-conceptual-wa_1258-69519.jpg?t=st=1718309525~exp=1718313125~hmac=b00bf51a3454625d5fe928beeb1c34214eda627bb396d9b98b99b25b36be8128&w=996"
                            : specificUnit?.images[indexPicture]}`
                    }}
                    alt=""
                    className={`w-full h-full`}
                    resizeMode="cover"
                />
            }
            <TouchableOpacity className={` absolute top-1/2 -translate-y-4 right-5`} onPress={() => increaseIndexPicture()}>
                <AntDesign name="rightcircle" size={32} color={appColors.blackColor} />
            </TouchableOpacity>
        </View>
    )
}
export default UnitPicturesSlider