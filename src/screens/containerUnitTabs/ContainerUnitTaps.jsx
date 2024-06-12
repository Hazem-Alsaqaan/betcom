import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { TopTabNavigation } from "./TopTabNavigation"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getSpecificUnit } from "../../redux/actions/UnitsActions"
import { useRoute } from "@react-navigation/native"


const ContainerUnitTaps =()=>{
    const dispatch = useDispatch()
    const { token } = useSelector((state)=>state.AuthSlice)
    const { unitId } = useRoute().params
    useEffect(()=>{
        dispatch(getSpecificUnit({id: unitId, token: token}))
    },[])
    return(
        <>
        <SafeAreaView className={`flex-1 px-4`}>
            <View className={`flex items-center justify-center py-10`}>
                <Text>The Unit</Text>
            </View>
        </SafeAreaView>
        <TopTabNavigation/>
        </>
    )
}
export default ContainerUnitTaps