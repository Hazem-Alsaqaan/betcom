import { TouchableOpacity, Text, ActivityIndicator } from "react-native"


const AuthButton = ({ title, handleClick, loading }) => {
    return (
        <TouchableOpacity onPress={handleClick ? () => handleClick() : null} className={`bg-mainColor px-4 py-2 rounded-full w-72 flex items-center justify-center`}>
            <Text className={`text-center text-base font-rubikSemiBold`}>{loading ? < ActivityIndicator size="small" color="#000000" /> : title}</Text>
        </TouchableOpacity>
    )
}
export default AuthButton