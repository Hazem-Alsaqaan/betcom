import { TouchableOpacity, Text } from "react-native"


const AuthButton = ({ title, handleClick }) => {
    return (
        <TouchableOpacity className={`bg-mainColor px-4 py-2 rounded-full w-72`}>
            <Text className={`text-center text-xl font-rubikSemiBold`}>{title}</Text>
        </TouchableOpacity>
    )
}
export default AuthButton