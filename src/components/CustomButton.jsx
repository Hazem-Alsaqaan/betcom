import { TouchableOpacity, Text } from "react-native"


const CustomButton = ({title, handlePress}) => {
    return (
        <TouchableOpacity onPress={handlePress ? ()=>handlePress() : null} className={`bg-mainColor p-1 m-1 rounded-xl w-36 flex items-center justify-center`}>
            <Text className={`text-center text-base text-whiteColor font-rubikMedium`}>{title}</Text>
        </TouchableOpacity>
    )
}
export default CustomButton