import { useState } from "react"
import { Switch, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { setDarkMood } from "../redux/reducers/publicVariablesSlice"


const ThemeMood = () => {
    const dispatch = useDispatch()
    const { darkMood } = useSelector((state) => state.publicVariablesSlice)

    const ToggleMood = () => {
        dispatch(setDarkMood())
    }
    return (
        <View className={`flex-row items-center justify-center`}>
            <Switch
                trackColor={{ true: "#92A4BB", false: "#92A4BB" }}
                thumbColor={"#E2BC2C"}
                ios_backgroundColor={"#E2BC2C"}
                onValueChange={() => ToggleMood()}
                value={darkMood}
            />
            <Text className={`text-mainColor`}>Mood</Text>
        </View>
    )
}

export default ThemeMood