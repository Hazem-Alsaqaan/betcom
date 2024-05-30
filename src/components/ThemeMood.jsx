import { Switch, Text, View, Platform } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { setDarkMood } from "../redux/reducers/publicVariablesSlice"


const ThemeMood = () => {
    const dispatch = useDispatch()
    const { darkMood, english } = useSelector((state) => state.publicVariablesSlice)

    const ToggleMood = () => {
        dispatch(setDarkMood())
    }
    return (
        <View className={`flex-row items-center justify-center`}>
            <Switch
                trackColor={{ true: "#92A4BB", false: "#92A4BB" }}
                thumbColor={"#E2BC2C"}
                ios_backgroundColor={"#92A4BB"}
                onValueChange={() => ToggleMood()}
                value={darkMood
                }
                className={Platform.OS === "ios" ? `mx-2` : `mx-0`}
            />
            <Text className={`text-mainColor font-rubikSemiBold`}>{english ? "Dark Mood" : "الوضع المظلم"}</Text>
        </View>
    )
}

export default ThemeMood