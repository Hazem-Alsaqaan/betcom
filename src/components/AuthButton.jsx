import { TouchableOpacity, Text, ActivityIndicator } from "react-native"
import { appColors } from "../themes/colors"


const AuthButton = ({ title, handleClick, loading }) => {
    return (
        <TouchableOpacity onPress={handleClick ? () => handleClick() : null} className={`bg-mainColor px-4 py-2 rounded-full w-72 flex items-center justify-center`}>
            <Text className={`text-center text-base text-whiteColor font-rubikSemiBold`}>{loading ? < ActivityIndicator size="small" color={appColors.whiteColor} /> : title}</Text>
        </TouchableOpacity>
    )
}
export default AuthButton