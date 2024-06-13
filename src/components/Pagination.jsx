import { Text, TouchableOpacity, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDispatch, useSelector } from "react-redux";
import { decreaseActivePage, increaseActivePage, setActivePage } from "../redux/reducers/publicVariablesSlice";


const Pagination = () => {
    const dispatch = useDispatch()
    const { activePage, numberOfPages } = useSelector((state) => state.publicVariablesSlice)

    const PressNumberPage = (item) => {
        dispatch(setActivePage(item))
    }
    // increase page
    const handleIncrease = () => {
        dispatch(increaseActivePage())
    }
    // decrease page
    const handleDecrease = () => {
        dispatch(decreaseActivePage())
    }
    return (
        <View className={`flex-row items-center justify-center my-1`}>
            <TouchableOpacity className={`mr-4`} onPress={() => handleDecrease()}>
                <AntDesign name="leftcircleo" size={28} color="black" />
            </TouchableOpacity>
            <View className={`flex-row items-center bg-white w-48 overflow-hidden`}>
                {
                    numberOfPages.map((item) => (
                        <TouchableOpacity onPress={() => PressNumberPage(item)} className={`px-2 py-1 rounded-xl ${activePage === item ? "bg-mainColor" : "bg-blackColor"} mx-1`} key={item}>
                            <Text className={`text-whiteColor`}>{item}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <TouchableOpacity className={`ml-4`} onPress={() => handleIncrease()}>
                <AntDesign name="rightcircleo" size={28} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Pagination