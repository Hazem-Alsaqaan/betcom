import { Text, View } from "react-native"
import SignOutButton from "../components/SignOutButton"

const ProfileScreen = () => {
    return (
        <View className={`flex-1 items-center justify-center`}>
            <Text>Profile Screen</Text>
            <SignOutButton />
        </View>
    )
}

export default ProfileScreen