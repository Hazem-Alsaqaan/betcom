import { useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useDispatch, useSelector } from "react-redux"
import { getSpecificUnit } from "../redux/actions/UnitsActions"


const SpecificUnitScreen = ()=>{
    const dispatch = useDispatch()
    const { token } = useSelector((state)=>state.AuthSlice)
    const { specificUnit } = useSelector((state)=>state.UnitsSlice)
    const { unitId } = useRoute().params
    useEffect(()=>{
        dispatch(getSpecificUnit({id: unitId, token: token}))
    },[])
    return(
        <SafeAreaView>
            <View>
                <Text>specific-unit</Text>
                <Text>{specificUnit?.street}</Text>
            </View>
        </SafeAreaView>
    )
}

export default SpecificUnitScreen