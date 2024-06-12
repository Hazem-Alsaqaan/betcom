import { Text, View } from "react-native"
import { useSelector } from "react-redux"


const UnitLocation = ()=>{
    const { specificUnit } = useSelector((state)=>state.UnitsSlice)
    return(
        <View className={`flex-1 px-4`}>
            <Text>UnitLocation</Text>
            <Text>{specificUnit?.city}</Text>
        </View>
    )
}
export default UnitLocation