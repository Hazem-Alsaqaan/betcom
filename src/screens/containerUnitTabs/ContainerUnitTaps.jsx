import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { TopTabNavigation } from "./TopTabNavigation"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getSpecificUnit } from "../../redux/actions/UnitsActions"
import { useRoute } from "@react-navigation/native"
import UnitPicturesSlider from "../../components/UnitPicturesSlider"


const ContainerUnitTaps =()=>{
    const dispatch = useDispatch()
    const { token } = useSelector((state)=>state.AuthSlice)
    const { unitId } = useRoute().params
    useEffect(()=>{
        dispatch(getSpecificUnit({id: unitId, token: token}))
    },[])
    return(
        <>
        <SafeAreaView className={`flex`}>
            <UnitPicturesSlider />
        </SafeAreaView>
        <TopTabNavigation/>
        </>
    )
}
export default ContainerUnitTaps