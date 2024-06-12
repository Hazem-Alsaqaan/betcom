
import { Text, View } from "react-native"
import { useSelector } from "react-redux"



const UnitDescription = ()=>{
    const { specificUnit } = useSelector((state)=>state.UnitsSlice)
    return(
            <View className={`flex-1 px-4`}>
                <Text>specific-unit</Text>
                <Text>{specificUnit?.street}</Text>
            </View>
    )
}
export default UnitDescription