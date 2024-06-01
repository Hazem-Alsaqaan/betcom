import { Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { signOutCurrentUser } from "../redux/reducers/AuthSlice"

const HomeScreen = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector((state) => state.AuthSlice)
    const signOuthandler = () => {
        dispatch(signOutCurrentUser())
    }
    return (
        <View className={`flex-1 items-center justify-center`}>
            <Text>Home Screen</Text>
            <Text>{currentUser?.username}</Text>
            <TouchableOpacity onPress={() => signOuthandler()} className={` bg-gray500 px-8 py-1 rounded shadow-2xl my-5`}>
                <Text className={`text-whiteColor`}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen