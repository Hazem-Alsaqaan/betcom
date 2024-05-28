import { TouchableOpacity, Text } from "react-native"


const AuthButton = ({ title, handleClick }) => {
    return (
        <TouchableOpacity className={`bg-mainColor px-4 py-3 rounded-full w-72`}>
            <Text className={`text-center`}>{title}</Text>
        </TouchableOpacity>
    )
}
export default AuthButton