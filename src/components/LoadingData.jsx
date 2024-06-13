import { Text, View } from "react-native"
import { ProgressBar } from "react-native-paper"
import { appColors } from "../themes/colors"


const LoadingData =()=>{
    return(
        <View className={`flex-1 w-full py-10`}>
        <Text className={`px-4`}>Loading...</Text>
        <ProgressBar indeterminate color={appColors.mainColor} style={{backgroundColor: appColors.lightColor}}/>
        </View> 
    )
}

export default LoadingData