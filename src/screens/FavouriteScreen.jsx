import { useEffect } from "react"
import { ScrollView, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getFavouritesUnit } from "../redux/actions/favouriteUnitsAction"
import LoadingData from "../components/LoadingData"
import SingleCard from "../components/SingleCard"
const FavouriteScreen = () => {
    const { token } = useSelector((state) => state.AuthSlice)
    const { favouriteUnits, favouriteUnitLoading } = useSelector((state) => state.favouriteUnitsSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFavouritesUnit(token))
    }, [])
    return (
        <View className={`flex-1 items-center justify-center`}>
            {favouriteUnitLoading ?
                <LoadingData />
                :
                favouriteUnits.length > 0 ?
                    <ScrollView className={`flex-1 w-full`} showsVerticalScrollIndicator={false}>
                        {favouriteUnits.map((item) => (
                            <SingleCard key={item._id} item={item} />
                        ))}
                    </ScrollView>
                    :
                    <View className={`w-full flex-1 items-center justify-center py-10`}>
                        <Text className={`font-rubikMedium text-xl`}>لا يوجد مزيد من النتائج ...</Text>
                    </View>
            }
        </View>
    )
}

export default FavouriteScreen