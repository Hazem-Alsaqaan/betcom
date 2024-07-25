import { ScrollView, Text, View } from "react-native"
import { getUserUnits } from "../redux/actions/usersUnitsActions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import LoadingData from "../components/LoadingData"
import SingleCard from "../components/SingleCard"


const MyUnitsScreen = () => {
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.AuthSlice)
    const { usersUnits, usersUnitsLoading } = useSelector((state) => state.usersUnitsSlice)
    useEffect(() => {
        dispatch(getUserUnits(token))
    }, [])
    return (
        <View className={`flex-1 items-center justify-center px-4`}>
            {usersUnitsLoading ?
                <LoadingData />
                :
                usersUnits.length > 0 ?
                    <ScrollView className={`flex-1 w-full`} showsVerticalScrollIndicator={false}>
                        {usersUnits.map((item) => (
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

export default MyUnitsScreen